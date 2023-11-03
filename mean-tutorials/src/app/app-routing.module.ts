import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WorldComponent } from './components/NewsFolder/world/world.component';
import { AdminWorldComponent } from './admin/admin-world/admin-world.component';
import { BusinessComponent } from './components/NewsFolder/business/business.component';
import { IndiaComponent } from './components/NewsFolder/india/india.component';
import { PoliticsComponent } from './components/NewsFolder/politics/politics.component';
import { EconomyComponent } from './components/NewsFolder/economy/economy.component';
import { TechComponent } from './components/NewsFolder/tech/tech.component';
import { FinanceComponent } from './components/NewsFolder/finance/finance.component';
import { OpinionComponent } from './components/NewsFolder/opinion/opinion.component';
import { ArtsCultureComponent } from './components/NewsFolder/arts-culture/arts-culture.component';
import { RealEstateComponent } from './components/NewsFolder/real-estate/real-estate.component';
import { ScienceComponent } from './components/NewsFolder/science/science.component';
import { StyleComponent } from './components/NewsFolder/style/style.component';
import { SportComponent } from './components/NewsFolder/sport/sport.component';
import { VideoComponent } from './components/NewsFolder/video/video.component';
import { AudioComponent } from './components/NewsFolder/audio/audio.component';
import { LatestComponent } from './components/NewsFolder/latest/latest.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent },
  {path:'register',component:SingupComponent},
  {path:'world',component:WorldComponent},
  {path:'business',component:BusinessComponent},
  {path:'india',component:IndiaComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'economy',component:EconomyComponent},
  {path:'tech',component:TechComponent},
  {path:'finance',component:FinanceComponent},
  {path:'opinion',component:OpinionComponent},
  {path:'artsAndCulture',component:ArtsCultureComponent},
  {path:'realEstate',component:RealEstateComponent},
  {path:'science',component:ScienceComponent},
  {path:'style',component:StyleComponent},
  {path:'sport',component:SportComponent},
  {path:'video',component:VideoComponent},
  {path:'audio',component:AudioComponent},
  {path:'latest',component:LatestComponent}
  // {
  //   path: 'admin',
  //   loadChildren: () => import('../app/admin/admin.module')
  //     .then(mod => mod.AdminModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
