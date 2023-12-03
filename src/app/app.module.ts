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
    RegisterComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
