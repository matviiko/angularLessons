import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'black'

  constructor(private el: ElementRef, private r: Renderer2 ) {
    this.r.setStyle(this.el.nativeElement, 'font-size', '1rem');
    this.r.setStyle(this.el.nativeElement, 'text-align', 'center')
  }

@HostListener('click') onClick (event: Event) {
    console.log(event)
}

@HostListener('mouseenter') onEnter () {
  this.r.setStyle(this.el.nativeElement, 'color', this.color);
}

@HostListener('mouseleave') onLeave () {
    this.r.setStyle(this.el.nativeElement, 'color', null);
  }

}
