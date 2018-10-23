import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: { companyAcc: string,privateAcc: string, password: string } = {
    companyAcc: '',
    privateAcc:'ADMIN',
    password: 'km123456'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController,public toastCtrl:ToastController) {
  }


  doSignup() {
    let obj=this.account.companyAcc;
    if(typeof obj == "undefined" || obj == null || obj == ""){
      let toast = this.toastCtrl.create({
        message: "企业账户不能为空",
        duration: 1200,
        position: 'top'
      });
      toast.present();
    }else{
      //重新设置rootPage
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewWillEnter(){
    //左滑菜单关闭
    this.menu.enable(false);
  }

  ionViewWillLeave(){
    //左滑菜单打开
    this.menu.enable(true);
  }


}
