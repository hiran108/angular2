import { NgModule,Directive,Input,ElementRef,Renderer } from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
@Directive({
  selector : '[href]',
  host : {
    '(click)' : 'preventDefault($event)'
  }
})
export class MyInhertLink {
   ele;
  constructor(el: ElementRef,private renderer: Renderer) {this.ele=el.nativeElement;}
  @Input() href;
  preventDefault(event) { alert(this.ele.style);this.renderer.setElementClass(this.ele,'active',true);
    this.ele.style.class='active';
    if(this.href.length == 0) event.preventDefault();
  }
}