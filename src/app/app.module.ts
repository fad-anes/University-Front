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

@NgModule({
  declarations: [
    AppComponent,
    HeaderFrontComponent,
    HomefrontComponent,
    FooterFrontComponent,
    FooterBackComponent,
    HeaderBackComponent,
    AdminComponent,
    MenuadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
