import {Component} from '@angular/core';

import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  local: Storage;
  date: { title: string, price: number, location: string, score: number };
  courses: Array<{ index: number, title: string, img: string }>;
  sumPrice: number;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

    //   var headers= new Headers();
    //  //headers.append('Content-Type', 'application/json');
    //  var options = new RequestOptions({headers: headers});
    //  var url = 'https://app-pandora.azurewebsites.net/pandora/api/couples/v1.0/';
    //
    //  this.presentLoading();
    // this.sumPrice =0; this.http.get(url+this.navParams.get("couple_id")+'/dates/'+this.navParams.get("date").id).subscribe(res => {
    //      this.createCourse(res.json());
    //
    //  }, (err) =>{console.log(err)});
    //


    this.date = {
      title: "test",
      price: this.sumPrice,
      location: "",
      score: 3.5
    };

    this.courses = [];

     this.courses.push({
     index : 1,
     title:'제비다방',
     img:'assets/img/test.jpg'
     });
     this.courses.push({
     index : 2,
     title:'누리네집룰루',
     img:'assets/img/test2.jpg'
     });
     this.courses.push({
     index : 3,
     title:'꺄르륵꺄르륵꺄르륵',
     img:'assets/img/test.jpg'
     });
     this.courses.push({
     index : 4,
     title:'꺄르륵꺄르륵꺄르륵',
     img:'assets/img/test2.jpg'
     });
     this.courses.push({
     index : 5,
     title:'꺄르륵꺄르륵꺄르륵',
     img:'assets/img/test.jpg'
     });
     this.courses.push({
     index : 6,
     title:'꺄르륵꺄르륵꺄르륵',
     img:'assets/img/test2.jpg'
     });

  };

  createCourse(datas) {

    console.dir(datas);
    for (var i = 0; i < datas.length; i++) {
      var imgurl = 'assets/img/test.jpg';
      this.sumPrice += datas[i].price;
      this.courses.push({
        index: i + 1,
        img: imgurl,
        title: datas[i].title
      });
      this.date.location = datas[i].location;
      this.date.score = datas[i].score;
    }

  }


  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000,
      dismissOnPageChange: false
    });
    loading.present();
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.drawMap();

    console.dir(this.date);
  }

  drawMap() {
    var daum = (<any>window).daum;
    console.dir(daum);
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    var markerPosition = new daum.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }
}

