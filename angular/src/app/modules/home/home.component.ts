import { Component, OnInit } from '@angular/core';
import { trackByIndex } from '@shared/util/helpers';
import { categoryList } from '@core/metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	public trackByIndex = trackByIndex;
	public categoryList = categoryList;

  constructor() { }

  ngOnInit() {
  }

}
