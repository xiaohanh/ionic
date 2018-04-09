import { Component,ViewChild } from '@angular/core';

import { SubpagePage } from '../subpage/subpage';
import { NavParams } from 'ionic-angular';
import { NavController,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpModule,JsonpModule } from "@angular/http";
import { Http,Jsonp,Headers } from "@angular/http";  
import { Navbar } from "ionic-angular";  
import { Observable } from "rxjs";
import "rxjs/Rx";
import { HelloPage } from '../../pages/hello/hello';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  @ViewChild(Navbar) navbar: Navbar;
  constructor(  public bk:ViewController,public navCtrl: NavController,public http:Http,public jsonp:Jsonp,public alertCtrl: AlertController ) {

  }
  // 钩子函数生命周期，初始化在此函数下面进行
  ionViewDidLoad() {
    this.navbar.backButtonClick=()=>{
      this.navCtrl.pop();
    }
    this.bk.setBackButtonText('首页');
    // 是否显示返回按钮this.bk.showBackButtonText(false);


    console.log('ionViewDidLoad MinePage');
  }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
   log:string;
   pas;
   data;
   showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '登录',
      message: "用户名不存在或者用户名和密码不相符",
   
      buttons: ["关闭"]
    });
     prompt.present();
  }

  // 在logg()函数中：先进行验证if，else然后再发请求。(或者在if语句中写入return,这样就不用在写else了，因为有了return，跳出if语句，就不再执行下面的语句)
 logg(){
if(this.log==='' || this.pas===''){
  return;
}


  this.http.post( 'http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({status:'login',userID:this.log,password:this.pas}), {headers:this.headers} ).filter(data=>{
    return data.status === 200;
  }).map(data=>data.json()).subscribe( 
   data=>{ 
              
         this.navCtrl.push(HelloPage);
         
          
           },err=>{
            this.showPrompt();
     });




  






  }








	 
       	 
 
 	

      		
	


 

// 多个参数用&连接
// this.http.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+this.log+'&password='+this.pas+'").filter(data=>{
//     return data.status === 200;
//   }).map(this.data).subscribe( 
//     let re=this.data.json();
//     if(re==0){
    
//     }
//    re=>{ 
              
//                window.location.href = "../hello/hello.html";
         
          
//            },err=>{
//             this.showPrompt();
//      });






 



