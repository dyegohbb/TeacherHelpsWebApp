import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { CompartilhadoService } from 'src/app/compartilhado.service';
// import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  isLogado: boolean = false;
  loginType: string = "";
  constructor(private localStorageService: LocalStorageService, private router : Router, private _sharedService: CompartilhadoService) {
    _sharedService.changeEmitted$.subscribe(text => {
      if(text == "isLogado"){
        this.isLogado = true;
      }else{
        this.loginType = text;
        console.log(text)
      }
  });
  }

  goTo(url: string){
    this.router.navigate([url])
  }

  logout(){
    this.isLogado = false;
    this.localStorageService.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    // this.localStorageService.set('tokenExpiration', '')
    this.loginType = this.localStorageService.get("type");
    let date = new Date(this.localStorageService.get('tokenExpiration'));
    let token = this.localStorageService.get('token');
    if (date > new Date() && token != '') {
      this.isLogado = true;
    }else{
      this.isLogado = false;
    }
    if(!this.isLogado){
      this.localStorageService.clear();
    }

  }
}
