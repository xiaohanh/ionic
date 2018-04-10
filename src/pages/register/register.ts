import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { HttpModule,JsonpModule } from "@angular/http";
// import { Http,Jsonp,Headers } from "@angular/http";  
import { Navbar } from "ionic-angular";  
// import { Observable } from "rxjs";
// import "rxjs/Rx";
import {AgreePage } from '../../pages/agree/agree';
import {LogPage } from '../../pages/log/log';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild(Navbar) navbar: Navbar;
  constructor(  public bk:ViewController,public navCtrl: NavController,private alertCtrl: AlertController ) {

  } 

  
ionViewDidLoad() {
  this.navbar.backButtonClick=()=>{
    this.navCtrl.pop();
  }
  this.bk.setBackButtonText('登录');
  // 是否显示返回按钮this.bk.showBackButtonText(false);


  console.log('ionViewDidLoad MinePage');
}
userid;
pas;
rpas;
mes;
yue;
showPrompt1() {
  let prompt = this.alertCtrl.create({
    title: '手机号',
    message: "请输入正确的手机号",
 
    buttons: ["关闭"]
  });
   prompt.present();
 }
 
 
 showPrompt2() {
   let prompt = this.alertCtrl.create({
     title: '密码',
     message: "请输入不少于6位的密码",
  
     buttons: ["关闭"]
   });
    prompt.present();
  }
  
  showPrompt3() {
   let prompt = this.alertCtrl.create({
     title: '重复密码',
     message: "密码不一致！",
  
     buttons: ["关闭"]
   });
    prompt.present();
  }

user(){
  if(this.userid=='' || this.userid.length!=11){
    this.showPrompt1();
}
}
pass(){
   if(this.pas=='' || this.pas.length<6){
   this.showPrompt2();
   }
}
rpass(){
  if(this.rpas!=this.pas){
    this.showPrompt3();
  }
}
register(){
  this.navCtrl.push(LogPage);
}
agree(){
  this.navCtrl.push(AgreePage);
}


}









 


