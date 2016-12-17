import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-newDate',
  templateUrl: 'newDate.html'
})
export class NewDate {
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    }
    
    backPage(){
        this.navCtrl.pop();
    }
}