import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefrontComponent } from './homefront/homefront.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomefrontComponent , title:"Acceuil" },
  { path: 'Admin', component: AdminComponent , title:"Administrateur" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
