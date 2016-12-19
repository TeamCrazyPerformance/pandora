import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { MapList } from '../mapList/mapList';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-newDate',
  templateUrl: 'newDate.html'
})
export class NewDate {
    public base64Image : string;
    test : {count : number};
    course : {title : string, review : string, location : string, pictures : Array<{index : number, photo : string}>, score : number, price : number, locationObj : any, couple_id : string, seq_num : string, gps: string, contents : string, main_photo : string, photos : Array<{index : number, photo : string}>};
    photoCount : number;
    
    date : {review : string, title : string, courses : Array<Object>};
    count : number;
    courses : Array<any>;
    timer : number;
    shareMap : any;
    shareDaum : any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl : AlertController, public modalCtrl: ModalController, public http: Http) {
        
        this.test = {
            count : 0
        };
        this.photoCount = 0;
        this.courses = [];
        this.count = 0;
        this.initCourse();
        (<any>window).showMapList = this.showMapList;
        
    }
    
    
    initCourse(){
        this.course = {
            review: "",
            title: "",
            location: " ",
            pictures : new Array(),
            score : 0,
            price : 0,
            locationObj : new Object(),
            couple_id : " ", 
            seq_num : " ", 
            gps: " ", 
            contents : " ", 
            main_photo : " ", 
            photos : new Array()
        }
    }
    newDateForm(){
        
        //마지막 카드에서 데이터 가져오는거 필요함
        //회원가입 부분 참고해
        this.course.seq_num = this.count.toString();
        this.course.contents = this.course.review;
        if(this.course.pictures[0] != undefined){
            this.course.main_photo = this.course.pictures[0].photo;    
        }
        this.course.couple_id = "DP32hjeEvSoj7";
        this.course.photos = this.course.pictures;
        this.course.locationObj = null;
        
        this.courses.push(this.course);
        this.initCourse();
        console.log(this.course.pictures.length);
        this.count++;
        this.photoCount++;
    }
    backPage(){
        this.navCtrl.pop();
    }
    
    openPicture(course){
        console.log("진입");
        Camera.getPicture({
            destinationType: 0,
            sourceType : 0
        }).then((imageData) => {
            this.course.pictures.push({
                index : this.photoCount,
                photo : "data:image/jpeg;base64," + imageData
            });
            
        }, (err) => {
           alert(err.json()); 
        });
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
            course.gps = markerPosition.toString();
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            console.dir(marker);
            
            });
        modal.present();
    }
    
    saveData(){
        this.newDateForm();
        
        var headers = new Headers();
            headers.append('Content-Type','a pplication/json');
            var options = new RequestOptions({
                headers: headers
            });
        
        
        
        let data = {
            couple_id : "DP32hjeEvSoj7",
            days : "2016-12-23",
            public_cond: "1",
            course : this.courses,
            thumbnail : ""
        }
        
        if (this.courses[0].pictures[0] != undefined){
            data.thumbnail = this.courses[0].pictures[0].photo;       
        }
        
        this.http.post('https://app-pandora.azurewebsites.net/pandora/api/couples/v1.0/DP32hjeEvSoj7/dates',data,options).subscribe(
                res => {
                    alert("success" + res.json()); 
                }, (err) => {
                    alert("fail" + err.json());
            });
    }
    
}