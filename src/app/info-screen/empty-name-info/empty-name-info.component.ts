import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HeroService} from "../../shared/hero.service";
import {Router} from "@angular/router";
import {NameService} from "../../shared/name.service";
import {takeWhile, timeoutWith} from "rxjs/operators";
import {Observable, Subscriber} from "rxjs";
import {AppConstants} from "../../app.consts";

@Component({
  templateUrl: './empty-name-info.component.html',
  styleUrls: ['./empty-name-info.component.scss']
})
export class EmptyNameInfoComponent implements OnInit, OnDestroy {
  @ViewChild("nameForm", {static: false}) nameForm: NgForm;
  private componentActive: boolean;
  private askForLoading: boolean;

  constructor(private heroService: HeroService, private nameService: NameService, private router: Router) {
  }

  ngOnInit() {
    this.askForLoading = false;

    this.nameService.getHeroName().pipe(takeWhile(() => this.componentActive && this.askForLoading))
      .subscribe((name: string) => {
          this.nameForm.form.patchValue({'name': name});
          this.askForLoading = false;
        }
      );
  }

  ngOnDestroy() {
    this.askForLoading = false;
  }

  onSuggestName() {
    this.askForLoading = !this.askForLoading;
    this.nameService.getHeroName().pipe(
      takeWhile(() => this.askForLoading),
      timeoutWith(AppConstants.TIMEOUT, new Observable(
        (subscriber: Subscriber<string>) => subscriber.next(AppConstants.DEFAULT_HERO_NAME)
      ))
    ).subscribe((name: string) => {
        this.nameForm.form.patchValue({'name': name});
        this.askForLoading = false;
      }
    );
  }

  onInput() {
    this.askForLoading = false;
  }

  onSubmit() {
    if (this.nameForm.valid) {
      this.heroService.setName(this.nameForm.value['name']);
      this.router.navigate(['menu']);
    }
  }

}
