import { Component } from '@angular/core';
@Component({
  template: `<div class="container main-page"><router-outlet></router-outlet></div>`
})
export class CheckoutComponent {}


// {
//     "items": [
//         {
//             "product": "5f9157519fff8f1463316605",
//             "merchant": "5f9156ea18e6bd1448ea71db",
//             "price": 10.12,
//             "qty": 1
//         },
//         {
//             "product": "5f9157699badf9146b551960",
//             "merchant": "5f9273ef1e0f191c9e85fbe5",
//             "price": 10.3,
//             "qty": 5
//         }
//     ],
//     "customerDetails": {
//         "name": "Test",
//         "shippingAddress": "Test",
//         "contactNo": "Test"
//     }
// }