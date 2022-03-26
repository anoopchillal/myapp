import { element } from 'protractor';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    console.log("He was the one to sent to kill the Boogeyman!!", this.element.nativeElement)
    this.element.nativeElement.style.color = "yellow"
   }

   @HostListener('Mouseenter') highlight(){
    alert("Mouse Entering")
   }

  @HostListener('mouseleaving') dehighlight(){
    alert("Mouse Leaving")
  }

}
