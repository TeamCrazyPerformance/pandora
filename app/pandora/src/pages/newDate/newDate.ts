import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-newDate',
  templateUrl: 'newDate.html'
})
export class NewDate {
    public base64Image : string;
    test : {count : number};
    course : {title : string, review : string, location : string, pictures : Array<string>, score : number};

    date : {review : string, title : string, courses : Array<Object>};
    
    courses : Array<Object>;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        
        this.test = {
            count : 0
        };
        
        var date2 = this.course;
        this.courses = [];
        
    }
    newDateForm(){
        
        //마지막 카드에서 데이터 가져오는거 필요함
        //회원가입 부분 참고해
        
        this.courses.push({
            title:"hi"
        });
    }
    backPage(){
        this.navCtrl.pop();
    }
    
    openPicture(){
//        Camera.getPicture({
//            destinationType: 0,
//            sourceType : 0
//        }).then((imageData) => {
//            this.base64Image = "data:image/jpeg;base64," + imageData;
//        }, (err) => {
//           alert(err); 
//        });
        this.test.count++;
    }
}