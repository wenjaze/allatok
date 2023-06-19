import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { getIsMiceWasVisited, selectVisitedMice } from '../state/visited-pages.state';

@Injectable({
	providedIn: 'root',
})
export class VisitGuard implements CanMatch {
	constructor(private store: Store) {}
	canMatch(
		route: Route,
		segments: UrlSegment[]
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.store.pipe(
			select(selectVisitedMice),
			take(1)
		);
	}
}
