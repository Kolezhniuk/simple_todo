import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
