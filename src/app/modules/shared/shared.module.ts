import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from 'src/app/components/animal/animal.component';

@NgModule({
  declarations: [AnimalComponent],
  
  imports: [
    CommonModule
  ],
  exports: [AnimalComponent]
})
export class SharedModule { }
