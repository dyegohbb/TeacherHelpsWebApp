import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/professores/professor/professor';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {
  
  constructor(private localStorageService: LocalStorageService, private router: Router){}
  senha:string = '';

  professor : Professor = {

    dataDeCadastro: new Date(),
    cpf: "",
    nome: "",
    disciplina: "",
    disponibilidade: [],
    email: "",
    endereco: {},
    sobre: "",
    telefone: "",
    valorPorHora: 0,
  };

  
  proximo(){
    let professorString = JSON.stringify(this.professor);
    this.localStorageService.set("infoCadastroProfessor", professorString)
    this.localStorageService.set("infoCadastroSenha", professorString)
    this.router.navigate(['/cadastro/professor/continue'])
  }

  ngOnInit(): void {
  }

}
