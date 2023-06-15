import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiceComponent } from 'src/app/components/routes/mice/mice.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from 'src/app/components/animal/animal.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: MiceComponent }];

@NgModule({
	declarations: [MiceComponent],
	imports: [CommonModule,SharedModule, RouterModule.forChild(routes)],
})
export class MiceModule {}
