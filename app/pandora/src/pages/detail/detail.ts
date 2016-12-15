import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Slide } from '../slide/slide';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class Detail {
    local: Storage;
    date : {index : number, title : string, price: number, location: string, score: number};
    courses : Array<{index : number, title:string, img:string}>;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.date = {
            index : null,
            title: '200일 기념 서촌 탐방기',
            price: 480000,
            location: '홍대',
            score: 3.5
        };
        this.courses = [];
        this.courses.push({
            index : 1,
            title:'제비다방',
            img:'https://s3-ap-northeast-1.amazonaws.com/wisdomenews/1920x1080.90.205953-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC.jpg'
        });
        this.courses.push({
            index : 2,
            title:'누리네집룰루',
            img:'https://s3-ap-northeast-1.amazonaws.com/wisdomenews/1920x1080.90.205953-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC.jpg'
        });
        this.courses.push({
            index : 3,
            title:'꺄르륵꺄르륵꺄르륵',
            img:'https://s3-ap-northeast-1.amazonaws.com/wisdomenews/1920x1080.90.205953-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC.jpg'
        });
        this.courses.push({
            index : 4,
            title:'꺄르륵꺄르륵꺄르륵',
            img:'https://s3-ap-northeast-1.amazonaws.com/wisdomenews/1920x1080.90.205953-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC.jpg'
        });
        this.courses.push({
            index : 5,
            title:'꺄르륵꺄르륵꺄르륵',
            img:'https://s3-ap-northeast-1.amazonaws.com/wisdomenews/1920x1080.90.205953-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC.jpg'
        });
        this.courses.push({
            index : 6,
            title:'꺄르륵꺄르륵꺄르륵',
            img:'https://s3-ap-northeast-1.amazonaws.com/wisdomenews/1920x1080.90.205953-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3+%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC.jpg'
        });
        
    };
    ngOnInit()  {
    
    }
    ionViewWillEnter() {
        this.drawMap();
        this.date.index = this.navParams.get("index");
        
        console.dir(this.date);
    }
    
    drawMap(){
        var daum = (<any>window).daum;
        console.dir(daum);
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
    
        var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
        var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); 

        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }
    
    openAlbum(index){
        this.navCtrl.push(Slide,{"index":index});
    }
}