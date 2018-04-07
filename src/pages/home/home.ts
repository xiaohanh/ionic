import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    for (let i = 0; i <3; i++) {
      this.items.push( this.items.length );
    }
  }
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












