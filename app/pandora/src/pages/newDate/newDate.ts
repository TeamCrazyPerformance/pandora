import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { MapList } from '../mapList/mapList';
@Component({
  selector: 'page-newDate',
  templateUrl: 'newDate.html'
})
export class NewDate {
    public base64Image : string;
    test : {count : number};
    course : {title : string, review : string, location : string, pictures : Array<string>, score : number, price : number, locationObj : any};

    date : {review : string, title : string, courses : Array<Object>};
    count : number;
    courses : Array<Object>;
    timer : number;
    shareMap : any;
    shareDaum : any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl : AlertController, public modalCtrl: ModalController) {
        
        this.test = {
            count : 0
        };

        this.courses = [];
        this.count = 0;
        this.initCourse();
        (<any>window).showMapList = this.showMapList;
        
    }
    
    
    initCourse(){
        this.course = {
            review: "",
            title: "",
            location: "",
            pictures : new Array(),
            score : 0,
            price : 0,
            locationObj : new Object()
        }
    }
    newDateForm(){
        
        //마지막 카드에서 데이터 가져오는거 필요함
        //회원가입 부분 참고해
        
        this.courses.push(this.course);
        this.initCourse();
        console.dir(this.courses);
        this.count++;
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
    }
    
    insertPrice(course){
        
        console.dir(course);
        
        let prompt = this.alertCtrl.create({
            title: '사용금액',
        inputs: [
            {
                name: 'title',
                placeholder: 'Price'
            },
        ],
        buttons: [
            {
                text: 'Cancel',
                handler: data => {
                    console.log('Cancel clicked');
                }
            },
                {
                    text: 'Save',
                    handler: data => {
                    course.price = data.title;
                }
            }
        ]
    });
    prompt.present();
  }
    
    insertScore(course){
        console.dir(course);
        
        let prompt = this.alertCtrl.create({
            title: '별점',
        inputs: [
            {
                name: 'title',
                placeholder: 'Star'
            },
        ],
        buttons: [
            {
                text: 'Cancel',
                handler: data => {
                    console.log('Cancel clicked');
                }
            },
                {
                    text: 'Save',
                    handler: data => {
                    if(data.title > 10) {
                        data.title = 10;
                    }    
                    course.score = data.title;
                }
            }
        ]
    });
    prompt.present();
    }
    
    insertLocation(course){
        
        
        let prompt = this.alertCtrl.create({
            title: '장소검색',
        inputs: [
            {
                name: 'title',
                placeholder: 'Location'
            },
        ],
        buttons: [
            {
                text: 'Cancel',
                handler: data => {
                    console.log('Cancel clicked');
                }
            },
                {
                    text: 'Save',
                    handler: data => {
                    course.location = data.title;
                    this.searchLocation(course);
                }
            }
        ]
        });
        prompt.present();
    }
    
    searchLocation(course){
        let daum = (<any>window).daum;
        
        let container = document.getElementById('insertMap'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        let map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
        container.style.height = "200px";
        let places = new daum.maps.services.Places();

        let callback = function(status, result) {
        if (status === daum.maps.services.Status.OK) {
            (<any>window).locationArr = result;
        }
        };

        places.keywordSearch(course.location, callback);
        this.shareMap = map;
        this.shareDaum = daum;
        this.busyWating(course);
        
    }
    
    busyWating(course){
        
         let loading = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000,
            dismissOnPageChange: true
        });
        
        loading.present();
        
        this.timer = setInterval(() => {
            if((<any>window).locationArr != undefined) {
                this.showMapList(course);
                
            }
        }, 2000);
    }
    
    showMapList(course){
        clearInterval(this.timer);
        let modal = this.modalCtrl.create(MapList,this.navParams.data);
        modal.onDidDismiss(data => {
            course.locationObj = data;
            
            let container = document.getElementById('insertMap'); //지도를 담을 영역의 DOM 레퍼런스
            let options = { //지도를 생성할 때 필요한 기본 옵션
                center: new this.shareDaum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                level: 4 //지도의 레벨(확대, 축소 정도)
            };
            let map = new this.shareDaum.maps.Map(container, options);
            // 마커를 생성합니다
            
            map.setCenter(new this.shareDaum.maps.LatLng(data.latitude, data.longitude));
            var markerPosition  = new this.shareDaum.maps.LatLng(data.latitude, data.longitude); 
            var marker = new this.shareDaum.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            console.dir(marker);
            
            });
        modal.present();
    }
    
}