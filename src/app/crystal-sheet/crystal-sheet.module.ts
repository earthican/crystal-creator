import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { CrystalModule } from '@crystal-creator/crystal/crystal.module';
import { CrystalSheetComponent } from './crystal-sheet.component';


@NgModule({
  declarations: [CrystalSheetComponent],
  imports: [
    CommonModule,
    CrystalModule,
    // Angular Material
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [CrystalSheetComponent],
})
export class CrystalSheetModule { }
