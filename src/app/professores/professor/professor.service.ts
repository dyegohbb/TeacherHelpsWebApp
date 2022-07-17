import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Professor } from "./professor";

const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class ProfessorService {

    constructor(private http: HttpClient) {}

    list() {
        return this.http
            .get<Professor[]>(API + '/professor');       
    }
}
