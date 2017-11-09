import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[mouseHighlight]'
})
export class MouseHighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor= 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

}
