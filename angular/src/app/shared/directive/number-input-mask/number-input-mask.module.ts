import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputMaskDirective } from './number-input-mask.directive';

@NgModule({
  declarations: [NumberInputMaskDirective],
  imports: [CommonModule],
  exports: [CommonModule, NumberInputMaskDirective]
})
export class NumberInputMaskModule { }
