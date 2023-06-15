import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from 'src/app/components/routes/dogs/dogs.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from 'src/app/components/animal/animal.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: DogsComponent }];

@NgModule({
	declarations: [DogsComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DogsModule {}
