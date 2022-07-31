import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaModule } from './conta/conta.module';

import { ProfessorModule } from './professores/professor.module';
import { SobreModule } from './sobre/sobre.module';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartilhadoService } from './compartilhado.service';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ProfessorModule,
    AppRoutingModule,
    SobreModule,
    ContaModule,
    FormsModule,
    AlunosModule
  ],
  providers: [CompartilhadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
