import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Navbar } from "ionic-angular";  
import { LogPage } from '../../pages/log/log';

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  @ViewChild('myNav') nav: NavController;

  @ViewChild(Navbar) navbar: Navbar;


    constructor(  public bk:ViewController,public navCtrl: NavController ) {
  
    }
  
     aa(){
      
      this.navCtrl.push(LogPage);
    }
  

  // 钩子函数生命周期，初始化在此函数下面进行
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
    }
   


 
  }


