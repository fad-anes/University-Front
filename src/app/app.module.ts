import {  NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { HomefrontComponent } from './homefront/homefront.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { FooterBackComponent } from './footer-back/footer-back.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { AdminComponent } from './admin/admin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoaderComponent } from './loader/loader.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ExpirationDialogComponent } from './expiration-dialog/expiration-dialog.component';
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

import { AddBlocComponent } from './admin/Bloc/add-bloc/add-bloc.component';
import { GetBlocsComponent } from './admin/Bloc/get-blocs/get-blocs.component';
import { UpdateBlocComponent } from './admin/Bloc/update-bloc/update-bloc.component';
import { DeleteConfirmationDialogComponent } from './admin/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ChambreCountComponent } from './admin/Chambre/chambre-count/chambre-count.component';
import { CompareBlocsComponent } from './admin/Bloc/compare-blocs/compare-blocs.component';
import { AddChambreComponent } from './admin/Chambre/add-chambre/add-chambre.component';
import { GetChambresComponent } from './admin/Chambre/get-chambres/get-chambres.component';
import { UpdateChambreComponent } from './admin/Chambre/update-chambre/update-chambre.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderFrontComponent,
    HomefrontComponent,
    FooterFrontComponent,
    FooterBackComponent,
    HeaderBackComponent,
    AdminComponent,
    MenuadminComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    EtudiantComponent,
    ExpirationDialogComponent,
    UniversityComponent,
    AjoutuniversityComponent,
    ModifieruniversityComponent,
    FoyerComponent,
    AjoutfoyerComponent,
    ModifierfoyerComponent,
    AffecterUniversityToFoyerComponent,
    AffecteradminaunivesityComponent,
    AjoutetudiantComponent,
    ModifieradminComponent,
    AddBlocComponent,
    GetBlocsComponent,
    UpdateBlocComponent,
    DeleteConfirmationDialogComponent,
    ChambreCountComponent,
    CompareBlocsComponent,
    AddChambreComponent,
    GetChambresComponent,
    UpdateChambreComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
