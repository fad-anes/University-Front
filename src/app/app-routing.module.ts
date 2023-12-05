import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefrontComponent } from './homefront/homefront.component';
import { AdminComponent } from './admin/admin.component';
import { ChambreCountComponent } from './admin/Chambre/chambre-count/chambre-count.component';
import { CompareBlocsComponent } from './admin/Bloc/compare-blocs/compare-blocs.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomefrontComponent, data: { title: 'Acceuil' } },
  { path: 'Admin', component: AdminComponent, data: { title: 'Administrateur' } },
  {
    path: 'Bloc',
    loadChildren: () => import('./admin/Bloc/bloc.module').then((m) => m.BlocModule),
    data: { title: 'Bloc' }
  },
  {
    path: 'Chambre',
    loadChildren: () => import('./admin/Chambre/chambre.module').then((m) => m.ChambreModule),
    data: { title: 'Chambre' }
  },
  { path: 'chambre-count', component: ChambreCountComponent, data: { title: 'Chambre Count' }},
  { path: 'compare-blocs', component: CompareBlocsComponent, data: { title: 'Compare Blocs' }}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
