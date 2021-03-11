import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 60]);
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
      if (e.anchor) {
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        })
      } else if (e.position) {
        viewportScroller.scrollToPosition(e.position);
      } else {
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.user = false;
    }
  }

  /**
   * Funcion para realizar scroll a la seccion correspondiente
   * @param name
   */
  forceNavigate(name: string): any {
    this.router.navigate(['/inicio'], { fragment: name });
  }

}
