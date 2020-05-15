import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {HeroService} from "./hero.service";

@Injectable({
  providedIn: 'root'
})
export class EmptyNameGuard implements CanActivate {

  constructor(private heroService: HeroService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): boolean {
    if (this.heroService.name === undefined) {
      this.router.navigate(['name']);
      return false;
    }
    return true;
  }
}
