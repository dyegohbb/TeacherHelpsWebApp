import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient ) { }

  save(aluno: any){
    return this.http
            .post(API + '/aluno', {aluno});  
  }
}
