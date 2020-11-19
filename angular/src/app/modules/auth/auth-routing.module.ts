import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSignInComponent } from './sign-in/auth-sign-in.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: AuthSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
