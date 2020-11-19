import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-element',
  template: `<img [ngClass]="imgClass" [attr.src]="src" [attr.alt]="alt" [attr.title]="title" />`
})
export class ImgElementComponent {
	@Input() src: string;
	@Input() imgClass: string;
	@Input() alt: string = 'bellyhungry image';
	@Input() title: string = 'bellyhungry image';
}
