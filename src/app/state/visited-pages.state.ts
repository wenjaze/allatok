// visited-pages.state.ts
import {
	createAction,
	createReducer,
	on,
	createSelector,
	createFeatureSelector,
	props,
} from '@ngrx/store';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';

export interface VisitedPagesState {
	visitedMice: boolean;
}

const initialState: VisitedPagesState = {
	visitedMice: false,
};

export const visitMice = createAction(
	'[Visited Pages] Visit Mice'
);

export const visitMiceReducer = createReducer(initialState, on(visitMice,(state) => ({...state,visitedMice: true})))

export const getIsMiceWasVisited = createAction(
	'[Visited Pages] Get if mice was visited'
);

export const getIfMiceWasVisitedReducer = createReducer(initialState, on(getIsMiceWasVisited,(state) => ({ ...state, visitedMice: state.visitedMice})));

// Create a feature selector
export const selectVisitedPagesState = createFeatureSelector<VisitedPagesState>('visitedPages');

// Create a selector for visitedMice
export const selectVisitedMice = createSelector(
  selectVisitedPagesState,
  (visitedPagesState: VisitedPagesState) => visitedPagesState.visitedMice
);

