import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from 'src/app/components/routes/dogs/dogs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DogsComponent }];

@NgModule({
	declarations: [DogsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DogsModule {}
