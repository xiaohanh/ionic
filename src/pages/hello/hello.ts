import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubpagePage } from '../subpage/subpage';

/**
 * Generated class for the HelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

   goSub(){
    this.navCtrl.push(SubpagePage,{name:'liu'});
  }


  list=[1,2,3];
    del(i){
    this.list.splice(i,1);
    }
    goTop(i){
    this.list.unshift(this.list[i]);
    this.list.splice(i+1,1);
    } 




}
