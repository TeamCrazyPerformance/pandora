import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';
import { Home } from '../home/home';
import { Signup } from '../signup/signup';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  KakaoTalk:any;
  user : {email : string, password : string}
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
      
      this.user = {
          email : "",
          password : ""
      };
    
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
        
        var headers = new Headers();
            headers.append('Content-Type', 'application/json');
        var options = new RequestOptions({ headers: headers });
        
        let loading = this.loadingCtrl.create({
            content: "login..",
            duration: 5000,
            dismissOnPageChange: true
        });
        loading.present();

        
        this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/login',JSON.stringify(this.user),options).subscribe(res => {
                if(res.json().code == 200){
                    this.http.get('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/'+this.user.email+"/couples").subscribe(res => {
                        console.log(res.json()[0].id);
                        this.navCtrl.push(Home,{"user":this.user, "couple_id":res.json()[0].id});
                    }), (err) => {
                        alert("fail");
                    }
                };
	      }, (err) => {
	      	alert("failed");
	      });
    
  }
    
    doSignUp(){
        this.navCtrl.push(Signup);
    }
        
        
        
//    HTTP.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/', user, {})
//        .then(data => {
//
//            console.log(data.status);
//            console.log(data.data); // data received by server
//            console.log(data.headers);
//
//    })
//    .catch(error => {
//
//        console.log(error.status);
//        console.log(error.error); // error message as string
//        console.log(error.headers);
//
//    });
        
        //this.navCtrl.push(Home);
    }
