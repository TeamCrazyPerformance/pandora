import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NewDate } from '../newDate/newDate';
import { Detail } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
//  selectedItem: any;
//  icons: string[];
//  items: Array<{title: string, note: string, icon: string}>;

    dates: Array<{index : number,title: string, price: number, location: string, image: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
      
      
      
      
    // If we navigated to this page, we will have an item available as a nav param
//    this.selectedItem = navParams.get('item');

//      this.dates = [{'200일 기념 서촌 탐방기', 48000, '홍대', 'null'},{'2016 지산 락 페스티발', 92000, '강원도', 'null'},{'비오는날엔 공릉 놀숲', 21000, '공릉', 'null'},{'2박3일 제주도-한라산 등반', 181000, '제주특별시', 'null'}];
      this.dates = [];
      this.dates.push({
        index: 1,
        title: '200일 기념 서촌 탐방기',
        price: 48000,
        location: '홍대',
        image: 'null'
      });
      this.dates.push({
        index: 2,
        title: '2016 지산 락페스티발',
        price: 92000,
        location: '강원도',
        image: 'null'
      });
      this.dates.push({
        index: 3,
        title: '비오는날엔 공릉 놀숲',
        price: 21000,
        location: '노원구',
        image: 'null'
      });
      this.dates.push({
        index: 4,
        title: '2박3일 제주도-한라산 등반',
        price: 181000,
        location: '제주특별시',
        image: 'null'
      });
    // Let's populate this page with some filler content for funzies
//    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
//    'american-football', 'boat', 'bluetooth', 'build'];
//
//    this.items = [];
//    for (let i = 1; i < 11; i++) {
//      this.items.push({
//        title: 'Item ' + i,
//        note: 'This is item #' + i,
//        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//      });
//    }
//  }
//
//  itemTapped(event, item) {
//    // That's right, we're pushing to ourselves!
//    this.navCtrl.push(Home, {
//      item: item
//    });
//  }
  }
    
    ionViewWillEnter() {
        this.presentLoading();
    }
    
    presentLoading() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000,
      dismissOnPageChange: true
    });
    loading.present();
  }
    
  createNewDate(){
      this.navCtrl.push(NewDate);
  }
    
    openDetail(index){
        this.navCtrl.push(Detail,{"index":index});
    }
}
