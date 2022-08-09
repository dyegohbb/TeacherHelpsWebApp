import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-disponibilidades',
  templateUrl: './disponibilidades.component.html',
  styleUrls: ['./disponibilidades.component.css']
})
export class DisponibilidadesComponent implements OnInit {
  alterou: boolean = false;
  semDados: boolean = true;
  disponibilidades: any[] = [];
  professorId: string = "";
  horaInicial: any;
  horaFinal: any;
  dataMin: any;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private router : Router) { }

  adicionarDisponibilidade = () =>{
    if(this.horaInicial != null){
      let dateFinal = new Date(this.horaInicial) 
      dateFinal.setHours(dateFinal.getHours() + 1)
      let dateFinalFormatted = dateFinal.getFullYear() + "-" + (dateFinal.getMonth() + 1).toString().padStart(2, "0") + "-" + dateFinal.getDate().toString().padStart(2, "0") + "T" + dateFinal.getHours().toString().padStart(2, "0") + ":" + dateFinal.getMinutes().toString().padStart(2, "0") + ":00";
      this.disponibilidades.push({
        dataInicio: this.horaInicial.toString() + ":00",
        dataFim: dateFinalFormatted
      })
      this.alterou = true
    }
  }

  enviarDisponibilidades = () => {
    if(this.alterou){
      this.http.post('http://localhost:8080/professor/disponibilidades', {
        disponibilidade: this.disponibilidades
      },{
        headers:{
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
          'professorId': this.professorId
        }
      }
      ).subscribe()
    }
    
  }

  ngOnInit(): void {
    let hoje = new Date();
    let hojeFormatted = hoje.getFullYear() + "-" + (hoje.getMonth() + 1).toString().padStart(2, "0") + "-" + hoje.getDate().toString().padStart(2, "0") + "T" + hoje.getHours().toString().padStart(2, "0") + ":" + hoje.getMinutes().toString().padStart(2, "0");
    this.dataMin = hojeFormatted;

    let loginType = this.localStorageService.get("type");
    this.professorId = this.localStorageService.get("pessoaID")
    if(loginType != "professor" || this.professorId == ""){
      this.router.navigate(["/"])
    }else{
      this.http.get<any>('http://localhost:8080/professor/disponibilidades', {
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
          'professorId': this.professorId
        }
      }).subscribe(data => {
        if(data != null){
          this.semDados = false;
          this.disponibilidades = data;
          console.log(this.disponibilidades)
        }
      })
    }
    
  }

}
