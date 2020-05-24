import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {DungeonType} from "./domain/enemy/dungeon-type.enum";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {
  }

  showBattleWinPage(dungeonType: DungeonType) {
    this.router.navigate(['battle-win', dungeonType.toString()]);
  }

  showBattleLossPage() {
    this.router.navigate(['battle-loss']);
  }

  showGameFinishedPage() {
    this.router.navigate(['the-end']);
  }

  goToEquipmentPage() {
    this.router.navigate(['equipment']);
  }

  goToDungeon(dungeonType: DungeonType) {
    this.router.navigate(['dungeon', dungeonType.toString()]);
  }

  goToMap() {
    this.router.navigate(['map']);
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }
}
