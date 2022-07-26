import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'

import { ProfessorComponent } from "./professor/professor.component";
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CommonModule } from "@angular/common";
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { Overlay } from "@angular/cdk/overlay";

@NgModule({
    declarations: [ ProfessorComponent, ProfessorListComponent, ProfessorFormComponent ],
    imports: [ HttpClientModule, CommonModule  ],
    providers: [ MdbModalService, Overlay]
})
export class ProfessorModule {}