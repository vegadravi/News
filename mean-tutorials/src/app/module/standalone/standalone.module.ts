import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidateEqualModule } from 'ng-validate-equal';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AdminModule } from 'src/app/admin/admin.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({

  imports: [
    CommonModule,
    TabViewModule,
    RadioButtonModule,
    CalendarModule,
    AppRoutingModule,
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
    AdminModule,
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
  ],
  exports: [
   
 ],
})
export class StandaloneModule { }
