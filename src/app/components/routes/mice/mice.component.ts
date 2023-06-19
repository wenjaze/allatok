import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { visitMice } from 'src/app/state/visited-pages.state';

@Component({
	selector: 'app-mice',
	templateUrl: './mice.component.html',
	styleUrls: ['./mice.component.scss'],
})
export class MiceComponent {
	constructor(private store: Store) {}
	ngOnInit() {
		this.store.dispatch(visitMice());
	}
}
