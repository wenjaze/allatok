import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiceComponent } from 'src/app/components/routes/mice/mice.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MiceComponent }];

@NgModule({
	declarations: [MiceComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MiceModule {}
