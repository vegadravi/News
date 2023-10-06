import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/pages/home/home.component';
import { ValidateEqualModule } from 'ng-validate-equal';
//import { NewsFolderComponent } from './components/news-folder/news-folder.component';
import { WorldComponent } from './components/NewsFolder/world/world.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AdminWorldComponent } from './admin/admin-world/admin-world.component';
import { AdminModule } from './admin/admin.module';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import {CheckboxModule} from 'primeng/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    WorldComponent,
    HeaderComponent,
    AdminWorldComponent,
    
  
  ],
  imports: [
    BrowserModule,
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
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
