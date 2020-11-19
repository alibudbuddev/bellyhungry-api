import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numberInputMask]'
})
export class NumberInputMaskDirective {

  /**
   * Listen to keydown and only allow numeric characters.
   */
  @HostListener('keydown', ['$event']) public onKeyup(e: any) {
  	e.stopPropagation();
    const value = e.key;
    const code = e.keyCode || e.charCode;
    const numbers = /[^0-9]/gi;

    if(code == 8 || code == 46) return true;
    if(value.match(numbers)) return false
    return true
  }

}
