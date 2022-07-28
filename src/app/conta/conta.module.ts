import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CadastroProfessorStep2Component } from './cadastro-professor-step2/cadastro-professor-step2.component'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    CadastroProfessorComponent,
    CadastroAlunoComponent,
    CadastroProfessorStep2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ]
})
export class ContaModule { }
