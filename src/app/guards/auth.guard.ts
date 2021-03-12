import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { RegisterService } from '../services/register/register.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private registerService: RegisterService) { }

    canActivate(
        next: ActivatedRouteSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.registerService.isAuthenticated()) {
            this.router.navigate(['inicio']);
            return false;
        }
        return true;
    }
}
