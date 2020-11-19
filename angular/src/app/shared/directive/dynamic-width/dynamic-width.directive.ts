import { Directive, ElementRef, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[dynamicWidth]'
})
export class DynamicWidthDirective {

	@HostListener('window:resize', ['$event'])
	onResize(event) {
	  this.generateWidth();
	}

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
  	this.generateWidth();
  }

  generateWidth(): void {
    if (isPlatformBrowser(this.platformId)) {
    	const width = Math.floor(document.body.clientWidth / 196) * 196;
  	  this.el.nativeElement.style.width = `${width}px`;
    }
  }

}
