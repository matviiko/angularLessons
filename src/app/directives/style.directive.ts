import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'black'
    @HostBinding('style.color') elColor = null


  constructor(private el: ElementRef, private r: Renderer2 ) {
    this.r.setStyle(this.el.nativeElement, 'font-size', '1rem');
    this.r.setStyle(this.el.nativeElement, 'text-align', 'center')
  }

@HostListener('click') onClick (event: Event) {
    console.log(event)
}

@HostListener('mouseenter') onEnter () {
      this.elColor = this.color
  // this.r.setStyle(this.el.nativeElement, 'color', this.color);
}

@HostListener('mouseleave') onLeave () {
      this.elColor = null
    // this.r.setStyle(this.el.nativeElement, 'color', null);
  }

}
