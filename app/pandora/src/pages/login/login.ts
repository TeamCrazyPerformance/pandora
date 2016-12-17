import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';
import { Home } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  KakaoTalk:any;
  constructor(public navCtrl: NavController) {
      
    
  }
    
  doKakaoLogin(){
      this.KakaoTalk = (<any>window).KakaoTalk;
      this.KakaoTalk.login(
        function (result) {
            console.log('Successful login!');
            console.log(result);
        },
        function (message) {
            console.log('Error logging in');
            console.log(message);
        }
      );
  }
    
    doLogin(){
        
        this.navCtrl.push(Home);
    }
}