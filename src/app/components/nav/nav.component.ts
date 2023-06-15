import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
	menuItemList:MenuItem[] = [
		{
			text: "Kutyák",
			icon: "fas fa-dog",
			route: "/dogs",
		},
		{
			text: "Macskák",
			icon: "fas fa-cat",
			route: "/cats"
		},
		{
			text: "Egerek",
			icon: "fas fa-mouse",
			route: "/mice",
		},
	]
}
