import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HeroService} from "../../shared/hero.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './empty-name-info.component.html',
  styleUrls: ['./empty-name-info.component.scss']
})
export class EmptyNameInfoComponent {
  @ViewChild("nameForm", {static: false}) nameForm: NgForm;

  constructor(private heroService: HeroService, private router: Router) {
  }


  onSuggestName() {

  }

  onSubmit() {
    if (this.nameForm.valid) {
      this.heroService.setName(this.nameForm.value['name']);
      this.router.navigate(['menu']);
    }
  }

}
