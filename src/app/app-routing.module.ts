import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefrontComponent } from './homefront/homefront.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AuthGuard } from './Service/AuthGuard ';
import { UniversityComponent } from './university/university.component';
import { AjoutuniversityComponent } from './ajoutuniversity/ajoutuniversity.component';
import { ModifieruniversityComponent } from './modifieruniversity/modifieruniversity.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomefrontComponent , title:"Acceuil" },
  { path: 'Admin', component: AdminComponent,canActivate: [AuthGuard] , title:"Administrateur" },
  { path: 'login', component: LoginComponent , title:"Se Connecter" },
  { path: 'register', component: RegisterComponent , title:"Creer un compte" },
  { path: 'etudiant', component: EtudiantComponent,canActivate: [AuthGuard] , title:"profile" },
  { path: 'university', component: UniversityComponent,canActivate: [AuthGuard] , title:"university" },
  { path: 'ajuniver', component: AjoutuniversityComponent,canActivate: [AuthGuard] , title:"ajouter university" },
  { path: 'modifuniver', component: ModifieruniversityComponent,canActivate: [AuthGuard] , title:"modifier university" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
