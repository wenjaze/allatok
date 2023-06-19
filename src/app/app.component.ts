import { Component } from '@angular/core';
import {
  NavigationEnd,
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router,
	RouterEvent,
} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'allatok';

	isLoading: boolean = false;

	constructor(router: Router) {
		router.events.subscribe((event) => {
			if (event instanceof RouteConfigLoadStart) {
				this.isLoading = true;
			} else if (
				event instanceof RouteConfigLoadEnd ||
				event instanceof NavigationEnd
			) {
				this.isLoading = false;
			}
		});
	}
}
