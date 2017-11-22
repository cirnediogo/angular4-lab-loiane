import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DataFormComponent
  ],
  exports: [
    DataFormComponent
  ]
})
export class DataFormModule { }
