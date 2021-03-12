import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {
    if (this.registerService.isAuthenticated()) {
      this.router.navigate(['listado-tecnologias']);
    }
  }

  ngOnInit(): void {
  }

}
