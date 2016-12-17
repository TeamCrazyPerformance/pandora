import { Component } from '@angular/core';

import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'page-invite',
    templateUrl: 'invite.html'
})

export class Invite {
    partner : {phoneNum : string};
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http, public loadingCtrl: LoadingController){
        this.partner = {
            phoneNum : null
        };
    }
    
    dismiss() {
    this.viewCtrl.dismiss();
  }
    
    invitePartner(){
        
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        var options = new RequestOptions({
            headers: headers
        });
        
        let loading = this.loadingCtrl.create({
           content: "초대하는중",
            duration: 3000,
            dismissOnPageChange: true
        });
        loading.present();
        
        this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/'+this.params.get("user").email+"/couples/"+this.partner.phoneNum,{},options).subscribe(
        res => {
           console.log(res.json()); 
        }, (err) => {
            console.log(err);
        });
        
    }
}