import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }

    canActivate(): boolean {
      if (this._authService.loggedIn()) {
        console.log('true')
        return true
      } else {
        console.log('false')            
        this._router.navigate(['/login'])
        return false
      }
    }
  }