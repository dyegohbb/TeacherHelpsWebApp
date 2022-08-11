import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { ProfessorService } from 'src/app/professores/professor/professor.service';

@Component({
  selector: 'app-cadastro-professor-step2',
  templateUrl: './cadastro-professor-step2.component.html',
  styleUrls: ['./cadastro-professor-step2.component.css']
})
export class CadastroProfessorStep2Component implements OnInit {
  disciplinasPure: any;
  disciplinas: any;
  professor: any;
  horaInicial: any;
  disponibilidades: any[]=[];
  dataMin: any;
  senha: any;
  constructor(private localStorageService: LocalStorageService, private http: HttpClient, private professorService: ProfessorService, private router: Router) {}
  
   salvar(){
    this.professor.disponibilidades = this.disponibilidades,
    this.professor.senha = this.senha
    // let prof = JSON.stringify(this.professor)
    this.professorService.save(this.professor).subscribe(() => {
      this.router.navigate(['/login'])
    });
   }

   adicionarDisponibilidade(){
    if(this.horaInicial != null && this.horaInicial != ""){
      let dateFinal = new Date(this.horaInicial) 
      dateFinal.setHours(dateFinal.getHours() + 1)
      let dateFinalFormatted = dateFinal.getFullYear() + "-" + (dateFinal.getMonth() + 1).toString().padStart(2, "0") + "-" + dateFinal.getDate().toString().padStart(2, "0") + "T" + dateFinal.getHours().toString().padStart(2, "0") + ":" + dateFinal.getMinutes();

      let disp = {
        dataInicio: this.horaInicial,
        dataFim: dateFinalFormatted
      }

      let duplicado = false;
      this.disponibilidades.forEach(disponibilidade => {
        if(disponibilidade.dataInicio == disp.dataInicio){
          duplicado = true;
        }
      });

      if(!duplicado){
        this.disponibilidades.push(disp)
      }else{
        console.log("duplicado bb")
      }
      this.horaInicial = ""
    }
    console.log(this.disponibilidades)
   }

   removerDisponibilidade(disponibilidade : any){
    let tempDisp = this.disponibilidades.filter( (disp) => disp !== disponibilidade)
    this.disponibilidades = tempDisp;
   }

   fetchDisciplinas(){
    this.disciplinas = Object.values(this.disciplinasPure)
   }


  ngOnInit() {
    let hoje = new Date();
    let hojeFormatted = hoje.getFullYear() + "-" + (hoje.getMonth() + 1).toString().padStart(2, "0") + "-" + hoje.getDate().toString().padStart(2, "0") + "T" + hoje.getHours().toString().padStart(2, "0") + ":" + hoje.getMinutes().toString().padStart(2, "0");
    this.dataMin = hojeFormatted;
    console.log(this.dataMin)
    this.http.get<any>('http://localhost:8080' + '/disciplina').subscribe(disciplinas => {
      this.disciplinasPure = disciplinas
      this.fetchDisciplinas()
      })
    
    this.professor = JSON.parse(this.localStorageService.get("infoCadastroProfessor"));

    this.senha = this.localStorageService.get("infoCadastroSenha");
  }

}
