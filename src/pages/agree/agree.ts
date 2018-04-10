import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

import { Navbar } from "ionic-angular";  

@IonicPage()
@Component({
  selector: 'page-agree',
  templateUrl: 'agree.html',
})
export class AgreePage {

  @ViewChild(Navbar) navbar: Navbar;
  constructor(  public bk:ViewController,public navCtrl: NavController ) {

  } 

  ionViewDidLoad() {
    this.navbar.backButtonClick=()=>{
      this.navCtrl.pop();
    }
    this.bk.setBackButtonText('');
    // 是否显示返回按钮this.bk.showBackButtonText(false);
  
  
    console.log('ionViewDidLoad MinePage');
  }

}
