import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreCountComponent } from './chambre-count/chambre-count.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ChambreModule { }
