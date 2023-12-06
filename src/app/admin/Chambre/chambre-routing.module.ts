import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GetChambresComponent } from './get-chambres/get-chambres.component';

const routes: Routes = [
  {path:'', component:GetChambresComponent},
  {path:'update/:idchambre', component:UpdateChambreComponent},
  {path:'add', component:AddChambreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
