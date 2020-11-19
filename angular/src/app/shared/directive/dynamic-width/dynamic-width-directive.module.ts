import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicWidthDirective } from './dynamic-width.directive';

@NgModule({
  declarations: [DynamicWidthDirective],
  imports: [CommonModule ],
  exports: [CommonModule, DynamicWidthDirective]
})
export class DynamicWidthDirectiveModule { }
