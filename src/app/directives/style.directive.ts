import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private r: Renderer2 ) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    this.r.setStyle(this.el.nativeElement, 'font-size', '1rem');
    this.r.setStyle(this.el.nativeElement, 'text-align', 'center')
  }

}
