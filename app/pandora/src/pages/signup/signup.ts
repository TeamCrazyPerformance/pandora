import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

  user : {email : string, password : string, name : string, gender : string, phoneNum : string }
  
    constructor(public navCtrl: NavController, public http : Http) {
      
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
      
      
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({ headers: headers });
    this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/',JSON.stringify(this.user),options).subscribe(res => {
                console.log(res.json());
	      }, (err) => {
	      	alert("failed");
	      });
  }

}
