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
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { RouterModule } from '@angular/router';
import { StandaloneModule } from './module/standalone/standalone.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
