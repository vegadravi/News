import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DeshboardComponent } from './deshboard/deshboard.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    DeshboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DialogModule
  ]
})
export class AdminModule { }
