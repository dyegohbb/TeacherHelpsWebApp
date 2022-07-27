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
  constructor(private localStorageService: LocalStorageService, private router : Router, private _sharedService: CompartilhadoService) {
    _sharedService.changeEmitted$.subscribe(text => {
      if(text == "isLogado"){
        console.log("abacate?")
        this.isLogado = true;
      }
  });
  }

  goTo(url: string){
    this.router.navigate([url])
  }

  logout(){
    this.localStorageService.set('token','')
    this.isLogado = false;
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    // this.localStorageService.set('tokenExpiration', '')
    let date = new Date(this.localStorageService.get('tokenExpiration'));
    let token = this.localStorageService.get('token');
    if (date > new Date() && token != '') {
      this.isLogado = true;
    }else{
      this.isLogado = false;
    }
  }
}
