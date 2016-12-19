import { Component } from '@angular/core';

import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-mapList',
    templateUrl: 'mapList.html'
})

export class MapList{
    
    place : {address : string, category : string, imageUrl : string, latitude : string, longitude : string, phone : string, title : string}
    places : Array<Object>;
    
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public navCtrl: NavController){
        
    }
    
    ionViewWillEnter(){
        
        console.dir((<any>window).locationArr);
        this.places = (<any>window).locationArr.places;
       
    }
    
    clickList(place){
        this.dismiss(place);
    }
    
    dismiss(place) {
        this.viewCtrl.dismiss(place);
    }
}