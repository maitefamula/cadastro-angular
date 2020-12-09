import { Cadastro } from './../cadastro.model';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.sass']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    nome: '',
    idade: '' ,
    telefone: '',
    email: '',
    profissao: '',
    area_de_interesse: ''
  }

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  ngOnInit(): void {
  
  }

  createCadastro(): void{
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.cadastroService.showMensagem('Cadastro criado com sucesso!')
      this.router.navigate(['/cadastro'])
    })
  
  }

  cancelCadastro(): void{
    this.router.navigate(['/cadastro'])
  }

}
