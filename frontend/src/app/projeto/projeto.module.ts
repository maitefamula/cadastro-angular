import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import {MatCardModule} from '@angular/material/card';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatButtonModule }from '@angular/material/button';
import { CadastroCreateComponent } from './cadastro/cadastro-create/cadastro-create.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    HomeComponent,
     CadastroComponent,
     CadastroCreateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    CadastroComponent,
    CadastroCreateComponent
  ]
})
export class ProjetoModule { }
