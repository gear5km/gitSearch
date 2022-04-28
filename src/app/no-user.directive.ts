import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoUser]'
})
export class NoUserDirective {

  constructor(private elem:ElementRef) { 

  }

  @HostListener("click")onClicks(){
    this.textColor("blue")
  }

  private textColor(action:string){
    this.elem.nativeElement.style.backgroundColor= action;
  }

}
