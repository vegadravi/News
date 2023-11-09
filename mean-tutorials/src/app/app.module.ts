import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/pages/home/home.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { HeaderComponent } from './components/header/header/header.component';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { CommonModule } from '@angular/common';
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
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchInputComponent } from './components/NewsFolder/search-input/search-input.component';
import { SearchListComponent } from './components/NewsFolder/search-list/search-list.component';
import { SearchContainerComponent } from './components/NewsFolder/search-container/search-container.component';
import { EconomyComponent } from './components/NewsFolder/economy/economy.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingupComponent,
    HomeComponent,
    LoginComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
    EconomyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    ToastModule,
    CardModule,
    InputMaskModule,
    CheckboxModule,
    DropdownModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
