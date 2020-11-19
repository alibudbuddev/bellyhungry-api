import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	ngOnInit(): void {
		this.removePageLoadMask();

		// const FB = window['FB'];
		// FB.getLoginStatus(function(response) {
		// 	console.log(response);
	 //    // statusChangeCallback(response);
		// });
	}

	removePageLoadMask(): void {
    const el = document.getElementById('page-loader');
    el.style.display = 'none';
  }
}
