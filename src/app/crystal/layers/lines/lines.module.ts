import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LinesFormComponent } from './lines-form/lines-form.component';
import { DottedLinesFormComponent } from './dotted-lines-form/dotted-lines-form.component';


@NgModule({
  declarations: [LinesFormComponent, DottedLinesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [LinesFormComponent, DottedLinesFormComponent],
})
export class LinesModule { }
