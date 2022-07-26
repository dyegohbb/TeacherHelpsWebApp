import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Professor } from '../professores/professor/professor';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  professor: Professor | any = {};
  disponibilidades: any[] = [];
  disponibilidadesPure: any[] | null = null;

  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

  disp: any[] = [];

  ngOnInit(): void {
    if (this.professor?.disponibilidade) {
      this.disponibilidades = this.professor.disponibilidade;
      this.disponibilidadesPure = this.disponibilidades;
      this.disponibilidades.forEach((disponibilidade) => {
        this.disp.push({
          dataInicio: this.formatarData(new Date(disponibilidade.dataInicio)),
          dataFim: this.formatarData(new Date(disponibilidade.dataFim))
        })
      });
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

  agendar(professor : Professor, data : String){
    console.log(professor)
    console.log(data)
  }
}