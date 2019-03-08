import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
