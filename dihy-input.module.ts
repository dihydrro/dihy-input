import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { DihyInputComponent } from './dihy-input.component';
import { DihyInputFileComponent } from './dihy-input-file/dihy-input-file.component';
import { DihyInputTokenComponent } from './dihy-input-token/dihy-input-token.component';
import { DihyInputTextComponent } from './dihy-input-text/dihy-input-text.component';
import { DihyInputTextareaComponent } from './dihy-input-textarea/dihy-input-textarea.component';

@NgModule({
  'imports': [
    CommonModule,
    FormsModule
  ],
  'declarations': [
    DihyInputComponent,
    DihyInputFileComponent,
    DihyInputTokenComponent,
    DihyInputTextComponent,
    DihyInputTextareaComponent
  ],
  'exports': [
    DihyInputComponent
  ]
})
export class DihyInputModule { }
