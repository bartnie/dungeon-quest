import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[repeat]'
})
export class RepeatDirective {
  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {
  }

  @Input() set repeat(count: number) {
    this.container.clear();
    for (let i = 0; i < count; i++) {
      this.container.createEmbeddedView(this.template);
    }
  };
}
