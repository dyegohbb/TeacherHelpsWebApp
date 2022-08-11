import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor/professor.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Professor } from '../professor/professor';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  loginType: string = "";
  professores: Professor[] = [];
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private professorService: ProfessorService, private modalService: MdbModalService){ }
  
  
  openModal(professor: Professor) {
    if(this.loginType == "aluno"){
      this.http.get<any>('http://localhost:8080/aluno/get', {
        headers: {
          'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token")
        }
      }).subscribe(data => {
        let aluno = data;
        this.modalRef = this.modalService.open(ModalComponent, {
          data: {
            aluno: aluno,
            professor: professor,
          },
        });
      })
    }else{
      this.modalRef = this.modalService.open(ModalComponent, {
        data: {
          professor: professor,
        },
    })}
    
  }

  ngOnInit(): void{
    this.loginType = this.localStorageService.get("type")
    this.professorService.list().subscribe(professores => this.professores = professores)
  }

}
