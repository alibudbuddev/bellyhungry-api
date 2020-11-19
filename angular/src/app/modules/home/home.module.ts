import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '@shared/modules';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCategoryListComponent } from './components/category-list/home-category-list.component';

@NgModule({
  declarations: [HomeComponent, HomeCategoryListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ElementsModule
  ]
})
export class HomeModule { }
