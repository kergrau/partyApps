import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './web-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isAuthenticated()) {
        alert('Sign in please');
        this.router.navigate(['/login']);
        return false;
      }

      const role = next.data['role'] as string;

      if (this.authService.hasRole(role)) {
        return true;
      }
      alert('You do not have access to this resource');
      return false;
    }

}
