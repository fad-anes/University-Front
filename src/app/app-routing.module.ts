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
import { FoyerComponent } from './foyer/foyer.component';
import { AjoutfoyerComponent } from './ajoutfoyer/ajoutfoyer.component';
import { ModifierfoyerComponent } from './modifierfoyer/modifierfoyer.component';
import { AffecterUniversityToFoyerComponent } from './affecter-university-to-foyer/affecter-university-to-foyer.component';
import { AffecteradminaunivesityComponent } from './affecteradminaunivesity/affecteradminaunivesity.component';
import { AjoutetudiantComponent } from './ajoutetudiant/ajoutetudiant.component';
import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
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
  { path: 'foyer', component: FoyerComponent,canActivate: [AuthGuard] , title:"foyer" },
  { path: 'ajoutfuniver', component: AjoutfoyerComponent,canActivate: [AuthGuard] , title:"Ajouter Foyer" },
  { path: 'modifuniver', component: ModifierfoyerComponent,canActivate: [AuthGuard] , title:"modifier Foyer" },
  { path: 'AffecterFoyer', component: AffecterUniversityToFoyerComponent,canActivate: [AuthGuard] , title:"Affecter" },
  { path: 'Affecteruser', component: AffecteradminaunivesityComponent,canActivate: [AuthGuard] , title:"Affecter user" },
  { path: 'ajoutuseretud', component: AjoutetudiantComponent,canActivate: [AuthGuard] , title:"ajouter user a etudiant" },
  { path: 'modifieruser', component: ModifieradminComponent,canActivate: [AuthGuard] , title:"Modifer user" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
