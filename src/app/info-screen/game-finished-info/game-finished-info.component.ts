import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HeroService} from "../../shared/hero.service";

@Component({
  templateUrl: './game-finished-info.component.html',
  styleUrls: ['./game-finished-info.component.scss']
})
export class GameFinishedInfoComponent implements OnInit{
  private heroName: string;

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroName = this.heroService.name;
  }

  onContinueAdventure() {
    this.router.navigate(['tavern']);
  }
}
