import { NgModule } from '@angular/core';
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
import { AdminWorldComponent } from './admin-world/admin-world.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ValidateEqualModule } from 'ng-validate-equal';
import { StepsModule } from 'primeng/steps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    DeshboardComponent,
    AdminComponent,
    AdminWorldComponent
  ],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    CalendarModule,
    TableModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    HttpClientModule,
    PaginatorModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    StepsModule,
    BrowserAnimationsModule,
    ToastModule,
    CardModule,
    InputMaskModule,
    CheckboxModule,
    DropdownModule
  ]
})
export class AdminModule { }
