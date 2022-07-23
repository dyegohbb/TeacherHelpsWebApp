import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorFormComponent } from './professores/professor-form/professor-form.component';
import { ProfessorListComponent } from './professores/professor-list/professor-list.component';

const routes: Routes = [
  { path: '', component: ProfessorListComponent},
  { path: 'professores/add', component: ProfessorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
