import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWorldComponent } from './admin-world/admin-world.component';
import { AdminComponent } from './admin.component';
import { DeshboardComponent } from './deshboard/deshboard.component';

const routes: Routes = [{
  path:'admin',
  component:AdminComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DeshboardComponent  },
    { path: 'aworld', component: AdminWorldComponent },
    // Add more routes as needed
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
