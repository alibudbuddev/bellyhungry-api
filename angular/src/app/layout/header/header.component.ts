import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private router: Router,
    public authService: AuthService,
    public cartService: CartService
  ) { }

  onLogoutClick(): void {
  	localStorage.removeItem('access_token');
  	this.authService.user = undefined;
  	this.router.navigate(['/products']);
  }

}
