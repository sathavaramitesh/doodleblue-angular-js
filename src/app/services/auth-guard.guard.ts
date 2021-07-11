import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedIn implements CanActivate {
  constructor(private router: Router, private helper: HelperService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.helper.checkUserLoggedInOrNot()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }  
}
