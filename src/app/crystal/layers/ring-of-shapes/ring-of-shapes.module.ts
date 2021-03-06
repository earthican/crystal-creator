import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RingOfShapesFormComponent } from './ring-of-shapes-form/ring-of-shapes-form.component';


@NgModule({
  declarations: [RingOfShapesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [RingOfShapesFormComponent],
})
export class RingOfShapesModule { }
