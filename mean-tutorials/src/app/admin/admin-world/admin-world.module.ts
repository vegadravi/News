import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminWorldComponent } from './admin-world.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminWorldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminWorldModule { }
