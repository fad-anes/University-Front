import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { HomefrontComponent } from './homefront/homefront.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { FooterBackComponent } from './footer-back/footer-back.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { AdminComponent } from './admin/admin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { AddBlocComponent } from './admin/Bloc/add-bloc/add-bloc.component';
import { GetBlocsComponent } from './admin/Bloc/get-blocs/get-blocs.component';
import { UpdateBlocComponent } from './admin/Bloc/update-bloc/update-bloc.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BlocModule } from './admin/Bloc/bloc.module';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddChambreComponent } from './admin/Chambre/add-chambre/add-chambre.component';
import { GetChambresComponent } from './admin/Chambre/get-chambres/get-chambres.component';
import { UpdateChambreComponent } from './admin/Chambre/update-chambre/update-chambre.component';
import { ChambreModule } from './admin/Chambre/chambre.module';
import { DeleteConfirmationDialogComponent } from './admin/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ChambreCountComponent } from './admin/Chambre/chambre-count/chambre-count.component';
import { CompareBlocsComponent } from './admin/Bloc/compare-blocs/compare-blocs.component';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';


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
    AddBlocComponent,
    GetBlocsComponent,
    UpdateBlocComponent,
    AddChambreComponent,
    GetChambresComponent,
    UpdateChambreComponent,
    DeleteConfirmationDialogComponent,
    ChambreCountComponent,
    CompareBlocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BlocModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ChambreModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    NgChartsModule,
  
  
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
