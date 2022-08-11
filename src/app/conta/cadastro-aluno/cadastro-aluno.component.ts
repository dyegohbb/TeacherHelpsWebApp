import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/alunos/aluno/aluno.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  constructor(private alunoService: AlunoService, private router : Router) { }

  aluno: any = {
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    telefone: "",
  };


  salvar(){
    this.alunoService.save(this.aluno).subscribe(() => {
      this.router.navigate(['/login'])
    });
  }

  ngOnInit(): void {
  }

}
