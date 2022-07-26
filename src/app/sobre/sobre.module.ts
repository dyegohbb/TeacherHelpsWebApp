import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    DetalhesComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SobreModule { }
