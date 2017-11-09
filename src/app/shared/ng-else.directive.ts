import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      // Renderizar o elemento DOM
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // Destruir o elemento DOM
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
