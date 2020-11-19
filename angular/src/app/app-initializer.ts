import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@core/service/auth.service';
import { AppService } from '@core/service/app.service';
import ShoppingCart from '@shared/class/shopping-cart';
import CartService from '@shared/service/cart.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitializer {
  private apiUrl: string;

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private cartService: CartService,
    private httpClient: HttpClient
  ) {
    cartService.init();
  }

  init(): () => Promise<boolean> {
    return () => {
      return new Promise<boolean>((resolve, reject) => {
        this.getConfig(() => {
          this.checUserIfAuthenticated(() => {
            resolve();
          });
        });
      });
    };
  }

  private getConfig(callback: () => void) {
    this.httpClient.get<any>('/client-server/environments')  
      .subscribe(
        response => {
          this.apiUrl = response.API_URL;
          this.appService.apiUrl = this.apiUrl;
          this.authService.endpoint = this.apiUrl;
          callback();
        },
        error => {
          callback();
        }
      );
  }

  private checUserIfAuthenticated(callback: () => void) {
    this.httpClient.get<any>(`${this.apiUrl}/auth/jwt/me`)  
      .subscribe(
        response => {
          this.authService.user = response.user;
          callback();
        },
        error => {
          this.authService.user = false;
          callback();
        }
      );
  }
}
