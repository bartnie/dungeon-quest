import {Component, Input} from '@angular/core';
import {StatusBarType} from "./status-bar-type.enum";

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent {
  @Input() max: number;
  @Input() current: number;
  @Input() type: StatusBarType;

  constructor() {
  }

  getCurrentPercentage(): number {
    return 100 * this.current / this.max;
  }

  getStatusBarColor(): string {
    switch (this.type) {
      case StatusBarType.HEALTH:
        return '#76AD20';

      case StatusBarType.STAMINA:
        return '#FEE12B';

      case StatusBarType.ENEMY_HEALTH:
        return '#FE5847';
    }
  }
}
