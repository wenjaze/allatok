import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitGuard } from './guards/visit.guard';

const routes: Routes = [
	{
		path: 'dogs',
		loadChildren: () =>
			import('./modules/dogs/dogs.module').then((m) => m.DogsModule),
	},
	{
		path: 'cats',
		loadChildren: () =>
			import('./modules/cats/cats.module').then((m) => m.CatsModule),
		canMatch: [VisitGuard],
	},
	{
		path: 'mice',
		loadChildren: () =>
			import('./modules/mice/mice.module').then((m) => m.MiceModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
