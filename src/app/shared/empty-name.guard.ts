import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HeroService} from "./hero.service";

@Injectable({
  providedIn: 'root'
})
export class EmptyNameGuard implements CanActivate {

  constructor(private heroService: HeroService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.heroService.name === undefined) {
      this.router.navigate(['name']);
    }
    return true;
  }
}
