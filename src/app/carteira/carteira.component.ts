import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  loading: boolean = true;
  type: any;
  aluno: any;
  professor: any;
  pessoa: any = {
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    carteira: "",
    valorPorHora: "",
    sobre: "",
    disciplina: "",
  }
  constructor(private localStorageService: LocalStorageService, private router : Router, private http: HttpClient) { }

  goTo = (link: any) => {
    this.router.navigate([link])
  }

  ngOnInit(): void {
    this.type = this.localStorageService.get("type")
    if(this.type == "aluno"){
      this.http.get<any>('http://localhost:8080/aluno/get',{
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
        }
      }).subscribe(data => {
        this.pessoa.nome = data.nome
        this.pessoa.cpf = data.cpf
        this.pessoa.telefone = data.telefone
        this.pessoa.email = data.email
        this.pessoa.carteira = data.carteira
        this.loading = false;
      })
    }else if(this.type == "professor"){
      this.http.get<any>('http://localhost:8080/professor/get',{
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
        }
      }).subscribe(data => {
        this.pessoa.nome = data.nome
        this.pessoa.cpf = data.cpf
        this.pessoa.telefone = data.telefone
        this.pessoa.email = data.email
        this.pessoa.carteira = data.carteira
        this.pessoa.sobre = data.sobre
        this.pessoa.valorPorHora = data.valorPorHora
        this.pessoa.disciplina = data.disciplina
        this.loading = false;
      })
    }else{
      this.goTo("/")
    }
  }

}
