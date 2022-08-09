import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent implements OnInit {
  agendamentoId: any;
  modalErro: boolean = false;
  pessoaId: any;
  loginType: string = "";
  agendamentos: any[] = [];
  semAgendamento: boolean = true;
  
  constructor(private localStorageService: LocalStorageService, private router : Router, private http: HttpClient) { }

  confirmar = (agendamento:any) =>{
    this.agendamentoId = agendamento.codigo.toString()
    if(agendamento.status != "disponivel"){
      this.modalErro = true;
    }
    console.log(this.agendamentoId)
    this.http.get<any>('http://localhost:8080/agendamentos/confirmar',{
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
          'agendamentoId': this.agendamentoId,
        }
      }).subscribe(data => {
        agendamento.status = data.status;
      })
  }

  deletar = (agendamento:any) => {
    console.log(this.agendamentos)
    console.log(agendamento)
    this.agendamentoId = agendamento.codigo.toString()
    this.http.get<any>('http://localhost:8080/agendamentos/deletar',{
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
          'agendamentoId': this.agendamentoId,
        }
      }).subscribe(() => {
        console.log("oi abc")
        let index = this.agendamentos.indexOf(agendamento)
        console.log(agendamento)
        console.log(index)
        if(index > -1){
          this.agendamentos.splice(index, 1);
        }
        console.log(this.agendamentos)
      })
  }

  closeModalError = () => {
    this.modalErro = false;
  }

  ngOnInit(): void {
    this.loginType = this.localStorageService.get("type");
    this.pessoaId = this.localStorageService.get("pessoaID");
    if(this.loginType == null || this.pessoaId == null){
      this.router.navigate(["/login"])
    }else{
      this.http.get<any[]>('http://localhost:8080/agendamentos',{
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token"),
          'userId': this.pessoaId,
          'userType': this.loginType
        }
      }).subscribe(data => {
        this.agendamentos = data
        if(this.agendamentos != null){
          this.semAgendamento = false;
          this.agendamentos.forEach(agendamento => {
            let startDate = new Date(agendamento.disponibilidade.dataInicio).toLocaleString("pt-BR", {timeZone: "America/Recife"});
            let endDate = new Date(agendamento.disponibilidade.dataFim).toLocaleString("pt-BR", {timeZone: "America/Recife"});
            agendamento.disponibilidade.dataInicioView = startDate
            agendamento.disponibilidade.dataFimView = endDate
          })
        }
        
      });
    }
    
  }
}
