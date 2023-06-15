import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from 'src/app/components/routes/cats/cats.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CatsComponent }];

@NgModule({
	declarations: [CatsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CatsModule {}
