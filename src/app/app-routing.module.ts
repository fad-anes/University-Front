import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefrontComponent } from './homefront/homefront.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutetudiantComponent } from './ajoutetudiant/ajoutetudiant.component';
import { ModifetudiantComponent } from './modifetudiant/modifetudiant.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomefrontComponent , title:"Acceuil" },
  { path: 'ajout', component: AjoutetudiantComponent , title:"ajout" },
  { path: 'modif', component: ModifetudiantComponent , title:"modif" },
  { path: 'Admin', component: AdminComponent , title:"Administrateur" },
  { path: 'login', component: LoginComponent , title:"Se Connecter" },
  { path: 'register', component: RegisterComponent , title:"Creer un compte" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
