import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo], div[fundoAmarelo]'
})
export class FundoAmareloDirective {
  
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {
    // console.log(this.elementRef);
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

}
