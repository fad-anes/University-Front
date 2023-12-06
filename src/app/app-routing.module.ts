import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefrontComponent } from './homefront/homefront.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutetudiantComponent } from './ajoutetudiant/ajoutetudiant.component';
import { ModifetudiantComponent } from './modifetudiant/modifetudiant.component';
import { EtudiantbackComponent } from './etudiantback/etudiantback.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EtudiantfrontComponent } from './etudiantfront/etudiantfront.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomefrontComponent , title:"Acceuil" },
  { path: 'Etudiant', component: EtudiantbackComponent , title:"Etudiant" },
  { path: 'ajout', component: AjoutetudiantComponent , title:"Ajouter" },
  { path: 'profile', component: EtudiantfrontComponent , title:"Profile" },
  { path: 'modif', component: ModifetudiantComponent , title:"Modifier" },
  { path: 'reserve', component: ReservationComponent , title:"reserve" },
  { path: 'Admin', component: AdminComponent , title:"Administrateur" },
  { path: 'login', component: LoginComponent , title:"Se Connecter" },
  { path: 'register', component: RegisterComponent , title:"Creer un compte" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
