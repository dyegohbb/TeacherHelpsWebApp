import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { CadastroAlunoComponent } from './conta/cadastro-aluno/cadastro-aluno.component';
import { CadastroProfessorStep2Component } from './conta/cadastro-professor-step2/cadastro-professor-step2.component';
import { CadastroProfessorComponent } from './conta/cadastro-professor/cadastro-professor.component';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { LoginComponent } from './conta/login/login.component';
import { DisponibilidadesComponent } from './disponibilidades/disponibilidades.component';
import { ProfessorListComponent } from './professores/professor-list/professor-list.component';
import { ContatoComponent } from './sobre/contato/contato.component';
import { DetalhesComponent } from './sobre/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: ProfessorListComponent},
  { path: 'sobre', component: DetalhesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/professor', component: CadastroProfessorComponent },
  { path: 'cadastro/professor/continue', component: CadastroProfessorStep2Component },
  { path: 'cadastro/aluno', component: CadastroAlunoComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'disponibilidades', component: DisponibilidadesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
