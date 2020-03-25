import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './web-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isAuthenticated()){
        if(this.isTokenExipired){
          this.authService.logout();
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  
  isTokenExipired():boolean{
    let token = this.authService.token;
    let payload = this.authService.getPayload(token);
    let now = new Date().getTime() / 1000
    if(payload.exp < now){
      return true;
    }
    return false;
  }
}
