import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GetBlocsComponent } from './get-blocs/get-blocs.component';
import { CompareBlocsComponent } from './compare-blocs/compare-blocs.component';

@NgModule({
  declarations: [
  
  ],
    imports: [
        CommonModule,
        BlocRoutingModule,
        ReactiveFormsModule,
    ]
})
export class BlocModule { }