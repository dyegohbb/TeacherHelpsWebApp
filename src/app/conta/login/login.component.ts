import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from 'src/app/local-storage.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';

  constructor(private localStorageService: LocalStorageService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email != '' && this.password != ''){
      this.http
            .post<any>("http://localhost:8080" + '/auth', {
                email: this.email,
                senha: this.password
            }).subscribe(data => {
              this.localStorageService.set("token", data.token)
              this.localStorageService.set("tokenType", "Bearer ")}); 
        this.router.navigate(['/'])
    }
  }

}
