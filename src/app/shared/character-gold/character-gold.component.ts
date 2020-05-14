import {Component} from "@angular/core";
import {GoldService} from "../gold.service";

@Component({
  selector: 'app-character-gold',
  templateUrl: './character-gold.component.html',
  styleUrls: ['./character-gold.component.scss']
})
export class CharacterGoldComponent {

  constructor(private goldService: GoldService) {
  }

  get currentGold() {
    return this.goldService.currentGold;
  }
}
