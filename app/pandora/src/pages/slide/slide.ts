import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class Slide {
    
  imgArray:Array<{img:string}>;
  courses : Array<{title:string, price:number, location:string, score:number,review:string,thumnail:string, imgArray:Array<{img:string}>}>;
  resources: Array<{flagThumnail:boolean, img:string, title:string, price:number, score:number, review:string, location:string, date:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.courses = [];
      this.imgArray = [];
      this.imgArray.push({
         img:"https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-20_6.jpeg" 
      });
      this.imgArray.push({
          img:"https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-21_35.jpeg"
      });
      
      
      this.courses.push({
         title: "마굿간 생고기",
         price: 28000,
         location: "서울 영등포",
         score: 3.5,
         review: "맛있는데 비싸다, 옆에서 구워주는게 좀 부담스러웠어",
         thumnail: "https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-20_6.jpeg",
         imgArray: this.imgArray
      });
      this.imgArray = [];
      this.imgArray.push({
         img:"https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-23_44.jpeg" 
      });
      this.imgArray.push({
         img:"https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-25_20.jpeg" 
      });
      this.imgArray.push({
         img:"https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-26_78.jpeg" 
      });
      this.courses.push({
          title: "코엑스 메가박스 시사회",
          price: 0,
          location: "서울 코엑스",
          score: 2,
          review: "공짜표라 좋긴 한데 너무 재미없었다..",
          thumnail: "https://s3-ap-northeast-1.amazonaws.com/wisdomenews/KakaoTalk_Photo_2016-11-24-09-13-23_44.jpeg",
          imgArray: this.imgArray
      });
      /* 리팩토링요망 */
      this.resources = [];
      for (var course in this.courses){
          this.resources.push({
              flagThumnail:true,
              img:this.courses[course].thumnail,
              location:this.courses[course].location,
              score:this.courses[course].score,
              review:this.courses[course].review,
              price:this.courses[course].price,
              title:this.courses[course].title,
              date:"2016.11.29 PM 1:00"
          });
          for (var img in this.courses[course].imgArray) {
              this.resources.push({
                  flagThumnail:false,
                  img:this.courses[course].imgArray[img].img,
                  location:this.courses[course].location,
                  score:this.courses[course].score,
                  review:this.courses[course].review,
                  price:this.courses[course].price,
                  title:this.courses[course].title,
                  date:"2016.11.29 PM 1:00"
              });
          }
      }
      console.dir(this.resources);
  }
}