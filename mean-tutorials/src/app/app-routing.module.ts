import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WorldComponent } from './components/NewsFolder/world/world.component';
import { AdminWorldComponent } from './admin/admin-world/admin-world.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent },
  {path:'register',component:SingupComponent},
  {path:'world',component:WorldComponent},
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
