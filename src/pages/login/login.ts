import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { PlaHomePage } from "../plantation/home/home";
import { CirHomePage } from "../circulation/cirhome/cirhome";
import { ProHomePage } from "../producation/prohome/prohome";
import { ApiProvider } from '../../providers/api/api';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: { companyAcc: string, privateAcc: string, password: string } = {
    companyAcc: '',
    privateAcc: 'ADMIN',
    password: 'km123456'
  };

  constructor(public navCtrl: NavController, public menu: MenuController, public apiProvider: ApiProvider, public toastProvider: ToastProvider) {
  }


  doSignup() {
    let obj = this.account.companyAcc;
    if (typeof obj == "undefined" || obj == null || obj == "") {
      this.toastProvider.create("企业账户不能为空").present();
      return;
    }
    //重新设置rootPage
    //种植公司Plantation  生产公司Producation  流通公司Circulation
    switch (obj) {
      case '1234':
        this.navCtrl.setRoot(CirHomePage);
        break;

      case 'abcd':
        this.navCtrl.setRoot(ProHomePage);
        break;

      default:
        this.navCtrl.setRoot(PlaHomePage);
        break;
    }
  }

  ionViewWillEnter() {
    //左滑菜单关闭
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    //左滑菜单打开
    this.menu.enable(true);
  }


}
