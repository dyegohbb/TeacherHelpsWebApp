import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from 'src/app/local-storage.service';

import { Professor } from "./professor";

const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class ProfessorService {

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

    list() {
        return this.http
            .get<Professor[]>(API + '/professor', {
                headers: {
                    'Authorization': this.localStorageService.get("tokenType") + this.localStorageService.get("token")}
            });       
    }
    
    save(professor: any) {
        return this.http
            .post(API + '/professor', {professor});       
    }
}
