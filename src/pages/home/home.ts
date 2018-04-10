import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    for (let i = 0; i <3; i++) {
      this.items.push( this.items.length );
    }

  }

showAlert();
//登录弹出框
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '登录',
      subTitle: '请先注册或者登录!',
      buttons: ['OK']
    });
    alert.present();
  }




//默认显示找信息下面的组件
  search="infor";
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
 



  items = [];
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i <3; i++) {
        this.items.push( this.items.length );
      }

      
      infiniteScroll.complete();
      if(this.items.length>=9){
        infiniteScroll.enable(false);
      }
    }, 500);
  }




 




}












