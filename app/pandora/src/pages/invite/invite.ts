import { Component } from '@angular/core';

import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Home } from '../home/home';

@Component({
    selector: 'page-invite',
    templateUrl: 'invite.html'
})

export class Invite {
    partner : {phoneNum : string};
    user : {email : string, password : string, name : string, gender : string, phoneNum : string };
    state : {buttonTitle : string};
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http, public loadingCtrl: LoadingController, public navCtrl: NavController){
        this.partner = {
            phoneNum : null
        };

        this.state = {
            buttonTitle : "초대하기"
        }
    }
    
    dismiss() {
    this.viewCtrl.dismiss();
  }
    
    ionViewWillEnter(){
        if(this.params.get("mode") == "kakao") {
            this.state.buttonTitle = "가입하기";
        }
        
    }
    
    invitePartner(){
        
        var headers = new Headers();
            headers.append('Content-Type','application/json');
            var options = new RequestOptions({
                headers: headers
            });
        
            let loading = this.loadingCtrl.create({
                content: "wait",
                duration: 3000,
                dismissOnPageChange: true
            });
            loading.present();
        
        if(this.params.get("mode") == "kakao") {
            this.state.buttonTitle = "가입하기";
            
            let kakao = (<any>window).kakaoUser;
//            alert(JSON.stringify(kakao));
            this.user = {
                email : kakao.id,
                password : kakao.id,
                name : kakao.nickname,
                gender : "true",
                phoneNum : this.partner.phoneNum
            };
            
            this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/',JSON.stringify(this.user),options).subscribe(res => {
                if(res.json().code == 201) {
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
                        } else {
                            alert("undefined error");
                        }
                    }, (err) => {
                        alert(err);
                    });
                } else {
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
                        } else {
                            alert("undefined error");
                        }
                    }, (err) => {
                        alert(err);
                    });
                }
            }, (err) => {
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
                        } else {
                            alert("undefined error");
                        }
                    }, (err) => {
                        alert(err);
                    });
            });
        } else {
            
            this.http.post('https://app-pandora.azurewebsites.net/pandora/api/users/v1.0/'+this.params.get("user").email+"/couples/"+this.partner.phoneNum,{},options).subscribe(
                res => {
                    this.navCtrl.setRoot(Home,this.params.data); 
                }, (err) => {
                    console.log(err);
            });
        }
        
        
    }
}