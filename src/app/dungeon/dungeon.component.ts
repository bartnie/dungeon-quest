import {Component} from "@angular/core";
import {DungeonType} from "../shared/domain/enemy/dungeon-type.enum";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent {
  dungeonType: DungeonType;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const dungeonTypeParam: number = +this.route.snapshot.params['dungeonType'];
    this.dungeonType = this.parseEnum(dungeonTypeParam);
  }

  private parseEnum(enumValue: number): DungeonType {
    let parsedEnumMember: number;
    for (let enumMember in DungeonType) {
      parsedEnumMember = parseInt(enumMember, 10);
      if (parsedEnumMember === enumValue) {
        return  parsedEnumMember as DungeonType;
      }
    }
    throw new Error(`${enumValue} is not a proper enum value.`);
  }
}
