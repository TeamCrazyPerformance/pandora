import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Home } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

  user : {email : string, password : string, name : string, gender : string, phoneNum : string }
  
    constructor(public navCtrl: NavController, public http : Http, public loadingCtrl: LoadingController) {
      
      this.user = {
          email : "",
          password : "",
          name : "",
          gender : "true",
          phoneNum : ""
      };
    
  }
    
  doSignup(){
      
      console.dir(this.user);
      
      let loading = this.loadingCtrl.create({
            content: "login..",
            duration: 5000,
            dismissOnPageChange: true
        });
        loading.present();
      
      
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({ headers: headers });
    this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/',JSON.stringify(this.user),options).subscribe(res => {
        if(res.json().code == "201") {
            this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/login',JSON.stringify(this.user),options).subscribe(res => {
                if(res.json().code == 200){
                    this.http.get('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/'+this.user.email+"/couples").subscribe(res => {
                        var id = 0;
                        if (res.json()[0] != undefined) {
                            id = res.json()[0].id;
                        }
                        this.navCtrl.push(Home,{"user":this.user, "couple_id":id});
                    }), (err) => {
                        alert("fail");
                    }
                };
	      }, (err) => {
	      	alert("failed");
	      });
        }
	      }, (err) => {
	      	alert("failed");
	      });
  }

}
