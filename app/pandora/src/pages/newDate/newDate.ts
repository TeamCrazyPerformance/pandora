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
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        
        this.test = {
            count : 0
        };
        
        var date2 = this.course;
        
    }
    newDateForm(){
        console.log(this.course);
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