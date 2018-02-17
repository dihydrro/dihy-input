import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { DihyInputComponent } from './dihy-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DihyInputComponent
  ],
  exports: [
    DihyInputComponent
  ]
})
export class DihyInputModule { }
