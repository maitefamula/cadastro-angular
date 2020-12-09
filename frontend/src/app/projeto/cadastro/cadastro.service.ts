import { Injectable } from '@angular/core';
 import { MatSnackBar } from '@angular/material/snack-bar';
 import { HttpClient } from '@angular/common/http';
 import { Cadastro } from './cadastro.model';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url= "http://localhost:3001/cadastro"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMensagem( msg: string) : void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cadastro: Cadastro): Observable<Cadastro[]>{
    return this.http.post<Cadastro[]>(this.url, cadastro)
  }
}
