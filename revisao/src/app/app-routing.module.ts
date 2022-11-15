import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GratisComponent } from './components/locais-para-visitar/gratis/gratis.component';
import { PagosComponent } from './components/locais-para-visitar/pagos/pagos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'locais', component:GratisComponent},
  {path:'locais/pagos', component:PagosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
