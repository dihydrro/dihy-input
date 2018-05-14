import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { DihyInputComponent }         from './dihy-input.component';
import { DihyInputBooleanComponent }  from './dihy-input-boolean/dihy-input-boolean.component';
import { DihyInputFileComponent }     from './dihy-input-file/dihy-input-file.component';
import { DihyInputTextComponent }     from './dihy-input-text/dihy-input-text.component';
import { DihyInputTextareaComponent } from './dihy-input-textarea/dihy-input-textarea.component';
import { DihyInputTokenComponent }    from './dihy-input-token/dihy-input-token.component';

@NgModule({
  'imports': [
    CommonModule,
    FormsModule
  ],
  'declarations': [
    DihyInputComponent,
    DihyInputBooleanComponent,
    DihyInputFileComponent,
    DihyInputTextComponent,
    DihyInputTextareaComponent,
    DihyInputTokenComponent
  ],
  'exports': [
    DihyInputComponent
  ]
})
export class DihyInputModule { }
