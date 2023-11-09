import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EconomyComponent } from './components/NewsFolder/economy/economy.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:EconomyComponent},
  {path:'home',component:HomeComponent },
  {path:'register',component:SingupComponent},
  {path:'world',component:HomeComponent},
  {path:'business',component:HomeComponent},
  {path:'india',component:HomeComponent},
  {path:'politics',component:HomeComponent},
  {path:'tech',component:HomeComponent},
  {path:'finance',component:HomeComponent},
  {path:'opinion',component:HomeComponent},
  {path:'entertainment',component:HomeComponent},
  {path:'science',component:HomeComponent},
  {path:'health',component:HomeComponent},
  {path:'sport',component:HomeComponent},
  {path:'video',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
