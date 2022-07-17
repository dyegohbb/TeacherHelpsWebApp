import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professores: any[] = [];

  constructor(private professorService: ProfessorService){ }

  ngOnInit(): void{
    this.professorService.list().subscribe(professores => this.professores = professores)
  }

}
