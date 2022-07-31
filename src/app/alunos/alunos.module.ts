import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AlunoComponent,
    AlunoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class AlunosModule { }
