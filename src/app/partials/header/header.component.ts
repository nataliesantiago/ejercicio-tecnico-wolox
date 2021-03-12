import { ViewportScroller } from '@angular/common';
import { Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  user: any;
  @Input() isFavourite: boolean;
  haveFavouriteTech: any;

  constructor(private router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 60]);
    // tslint:disable-next-line: deprecation
    router.events.pipe(filter((e) => e instanceof Scroll)).subscribe((e: Scroll) => {
      if (e.anchor) {
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        });
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

  ngDoCheck(): any {
    const FAVOURITE_TECH = localStorage.getItem('favourite_techs');
    if (FAVOURITE_TECH !== null) {
      this.haveFavouriteTech = JSON.parse(FAVOURITE_TECH);
    } else {
      this.haveFavouriteTech = [];
    }
  }

  /**
   * Funcion para realizar scroll a la seccion correspondiente
   *
   */
  forceNavigate(name: string): any {
    this.router.navigate(['/inicio'], { fragment: name });
  }

  /**
   * Funcion para redirigir al usuario de acuerdo a la pagina que seleccione
   *
   */
  navigateTo(route): any {
    this.router.navigate([route]);
  }
}
