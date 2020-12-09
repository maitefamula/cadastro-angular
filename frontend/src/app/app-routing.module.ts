import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './projeto/home/home.component'
import { CadastroComponent } from './projeto/cadastro/cadastro.component'
import { CadastroCreateComponent } from './projeto/cadastro/cadastro-create/cadastro-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"cadastro",
  component: CadastroComponent
},
{
  path:"cadastro/create",
  component: CadastroCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
