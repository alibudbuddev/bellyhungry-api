import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgElementComponent } from './img/img-element.component';



@NgModule({
  declarations: [ImgElementComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	CommonModule,
  	ImgElementComponent
  ]
})
export class ElementsModule { }
