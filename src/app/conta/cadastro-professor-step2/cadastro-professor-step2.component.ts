import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-cadastro-professor-step2',
  templateUrl: './cadastro-professor-step2.component.html',
  styleUrls: ['./cadastro-professor-step2.component.css']
})
export class CadastroProfessorStep2Component implements OnInit {
  disciplinasPure: any;
  disciplinas: any;
  professor: any;
  senha: any;
  constructor(private localStorageService: LocalStorageService, private http: HttpClient,) {}

   salvar(){
    console.log(this.professor)
    console.log(this.senha)
   }

   fetchDisciplinas(){
    this.disciplinas = Object.values(this.disciplinasPure)
    console.log(this.disciplinas)
   }


  ngOnInit() {
    this.http.get<any>('http://localhost:8080' + '/disciplina').subscribe(disciplinas => {
      this.disciplinasPure = disciplinas
      this.fetchDisciplinas()
      })
    
    let professor = JSON.parse(this.localStorageService.get("infoCadastroProfessor"));
    console.log(professor)

    let senha = this.localStorageService.get("infoCadastroSenha");
    console.log(senha)
  }

}
