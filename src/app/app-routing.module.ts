import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { LoginComponent } from './conta/login/login.component';
import { ProfessorFormComponent } from './professores/professor-form/professor-form.component';
import { ProfessorListComponent } from './professores/professor-list/professor-list.component';
import { ContatoComponent } from './sobre/contato/contato.component';
import { DetalhesComponent } from './sobre/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: ProfessorListComponent},
  { path: 'professores/add', component: ProfessorFormComponent },
  { path: 'sobre', component: DetalhesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
