import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(next);

    if (this.auth.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.log('Bloqueado por el guard');
      return false;
    }
  }

}
