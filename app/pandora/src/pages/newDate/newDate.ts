import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-newDate',
  templateUrl: 'newDate.html'
})
export class NewDate {
    date2={}
    /*
    course : {title : String, review : string, location : string, pictures : Array<string>, score : number};

    date : {review : string, title : string, courses : Array<Object>};
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        let date2 = this.course;
        
        date2 = {
            title : '',
            review : '',
            location : '',
            pictures : '',
            score : ''
        };
    }*/
    newDateForm(){
        console.log(this.date2);
    }
    /*
    backPage(){
        this.navCtrl.pop();
    }*/
}