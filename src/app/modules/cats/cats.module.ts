import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from 'src/app/components/routes/cats/cats.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: CatsComponent }];

@NgModule({
	declarations: [CatsComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class CatsModule {}
