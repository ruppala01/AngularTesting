import { Directive, OnInit, ElementRef, Input } from '@angular/core';

export const DEFAULT_BD_COLOR="red"
export const DEFAULT_BG_COLOR="green"

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements OnInit {

  defaultBgColor:string=DEFAULT_BG_COLOR;
  defaultBdColor:string=DEFAULT_BD_COLOR

  @Input('bg-color')bgColor:string;
  @Input('bd-color')bdColor:string;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor=this.bgColor || this.defaultBgColor
    this.el.nativeElement.style.border=`2px solid ${this.bdColor || this.defaultBdColor}`
  }

}
