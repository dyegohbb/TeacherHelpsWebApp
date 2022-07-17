import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'

import { ProfessorComponent } from "./professor/professor.component";
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CommonModule } from "@angular/common";
import { ProfessorFormComponent } from './professor-form/professor-form.component';

@NgModule({
    declarations: [ ProfessorComponent, ProfessorListComponent, ProfessorFormComponent ],
    imports: [ HttpClientModule, CommonModule ]
})
export class ProfessorModule {}