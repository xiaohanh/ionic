import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { HttpModule,JsonpModule } from "@angular/http";
// import { Http,Jsonp,Headers } from "@angular/http";  
import { Navbar } from "ionic-angular";  
// import { Observable } from "rxjs";
// import "rxjs/Rx";
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { PasswordPage } from '../../pages/password/password';
@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  @ViewChild(Navbar) navbar: Navbar;
  constructor(  public bk:ViewController,public navCtrl: NavController,private alertCtrl: AlertController ) {

  }
  // ,public http:Http,public jsonp:Jsonp,
// 钩子函数生命周期，初始化在此函数下面进行
ionViewDidLoad() {
  this.navbar.backButtonClick=()=>{
    this.navCtrl.pop();
  }
  this.bk.setBackButtonText('我的');
  // 是否显示返回按钮this.bk.showBackButtonText(false);


  console.log('ionViewDidLoad MinePage');
}

register(){
  this.navCtrl.push(RegisterPage);
}
password(){
  this.navCtrl.push(PasswordPage);
}
// headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
// userid:number;
// pas;

// showPrompt() {
//  let prompt = this.alertCtrl.create({
//    title: '登录',
//    message: "用户名不存在或者用户名与密码不相符",

//    buttons: ["关闭"]
//  });
//   prompt.present();
// }

// login(){
//     if(this.userid==='' || this.pas===''){
//      return;
//     }

//    this.http.post( 'http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({status:'login',userID:this.userid,password:this.pas}), {headers:this.headers} ).filter(data=>{
//     return data.status === 200;
// }).map(data=>data.json()).subscribe( 
// data=>{ 
           
//         this.navCtrl.push(HomePage);
      
       
//         },err=>{
//          this.showPrompt();
//   });

// }
}






 




  









