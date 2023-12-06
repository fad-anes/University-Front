import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GetBlocsComponent } from './get-blocs/get-blocs.component';

const routes: Routes = [
  {path:'', component:GetBlocsComponent},
  {path:'update/:idbloc', component:UpdateBlocComponent},
  {path:'add', component:AddBlocComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }