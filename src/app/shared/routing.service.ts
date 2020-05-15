import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {
  }

  showBattleWinPage() {
    this.router.navigate(['battle-win']);
  }

  showBattleLossPage() {
    this.router.navigate(['battle-win']);
  }
}
