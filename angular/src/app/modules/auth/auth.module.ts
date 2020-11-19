import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementsModule } from '@shared/modules';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthSignInComponent } from './sign-in/auth-sign-in.component';


@NgModule({
  declarations: [AuthSignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ElementsModule
  ]
})
export class AuthModule { }
