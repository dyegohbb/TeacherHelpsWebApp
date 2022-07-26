import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor/professor.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Professor } from '../professor/professor';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professores: Professor[] = [];
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private professorService: ProfessorService, private modalService: MdbModalService){ }
  
  
  openModal(professor: Professor) {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        professor: professor,
      },
    });
  }

  ngOnInit(): void{
    this.professorService.list().subscribe(professores => this.professores = professores)
  }

}
