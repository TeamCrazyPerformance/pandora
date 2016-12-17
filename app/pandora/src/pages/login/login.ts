import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';
import { Home } from '../home/home';
import { HTTP } from 'ionic-native';

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
        
    HTTP.post('https://github.com/Duck528/pandora', {}, {})
        .then(data => {

            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);

    });
    .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

    });
        
        //this.navCtrl.push(Home);
    }
}