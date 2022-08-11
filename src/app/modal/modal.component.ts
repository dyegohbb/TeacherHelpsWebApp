import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { LocalStorageService } from '../local-storage.service';
import { Professor } from '../professores/professor/professor';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  aluno: any;
  professor: Professor | any = {};
  disponibilidades: any[] = [];
  disponibilidadesPure: any[] | null = null;
  modalError: boolean = false; 

  constructor( private localStorageService: LocalStorageService, public modalRef: MdbModalRef<ModalComponent>, private router : Router, private http: HttpClient) {}

  disp: any[] = [];
  token: string = "";
  alunoId: any;
  isAlunoLogado: boolean = false;

  ngOnInit(): void {
    if(this.aluno){
      if(this.aluno.carteira < this.professor.valorPorHora){
        this.modalError = true;
        console.log("tenho grana n fi")
      }
    }
    if (this.professor?.disponibilidades && !this.modalError) {
      this.disponibilidades = this.professor.disponibilidades;
      this.disponibilidadesPure = this.disponibilidades;
      this.disponibilidades.forEach((disponibilidade) => {
        this.disp.push({
          dataInicioPure: new Date(disponibilidade.dataInicio),
          dataFimPure: new Date(disponibilidade.dataFim),
          dataInicio: this.formatarData(new Date(disponibilidade.dataInicio)),
          dataFim: this.formatarData(new Date(disponibilidade.dataFim))
        })
      });
    }

    this.token = this.localStorageService.get("token")
    let type = this.localStorageService.get("type")
    if(type == "aluno"){
      this.alunoId = this.localStorageService.get("pessoaID")
      if(this.alunoId != null){
        this.isAlunoLogado = true;
      }
    }
  }

  formatarData(date: Date): String {
    let dataFormatada;
    dataFormatada =
      date.getDate() + '/';

    if(date.getMonth().toString.length == 1){
      dataFormatada = dataFormatada + "0" + (date.getMonth() + 1) + '/' + date.getFullYear();
    }else{
      dataFormatada = dataFormatada + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
    dataFormatada = dataFormatada + " " + date.getHours();
    if(date.getMinutes().toString().length == 1) {
      dataFormatada = dataFormatada + ":0" + date.getMinutes();
    }else{
      dataFormatada = dataFormatada + ":" + date.getMinutes();
    }
    return dataFormatada;
  }

  goToSobre() {
    this.modalRef.close()
    this.router.navigate(["/sobre"])
  }

  agendar(professor : any, disponibilidade : any){
    let startDate = new Date(disponibilidade.dataInicioPure).toLocaleString("pt-BR", {timeZone: "America/Recife"});
    let endDate = new Date(disponibilidade.dataFimPure).toLocaleString("pt-BR", {timeZone: "America/Recife"});
    let d ={
      dataInicio: startDate,
      dataFim: endDate,
    }
    this.http
        .post<any>('http://localhost:8080' + '/aluno/agendar', {
          professorId: professor.codigo,
          disponibilidade: d,
        }, {
          headers: {
            'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token")}
        })
        .subscribe((data) => {
          this.modalRef.close()
          this.router.navigate(['/agendamentos'])
        });
  }
}