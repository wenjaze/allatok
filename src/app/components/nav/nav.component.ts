import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
	menuList:MenuItem[] = [
		{
			text: "Kutyák",
			icon: "fas fa-dog"
		},
		{
			text: "Macskák",
			icon: "fas fa-cat"
		},
		{
			text: "Egerek",
			icon: "fas fa-mouse"
		},
	]
}
