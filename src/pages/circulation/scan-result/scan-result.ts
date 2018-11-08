import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ScanResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html',
})
export class ScanResultPage {
  scanResult:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
     this.scanResult=navParams.get('scanResult');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanResultPage');
  }

  submit(){
    this.navCtrl.pop();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '信息再次确认!',
      message: '确认执行箱体码 '+this.scanResult+' 上架操作?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            confirm.dismiss();
          }
        },
        {
          text: '确认无误',
          handler: () => {
            this.submit()
          }
        }
      ]
    });
    confirm.present();
  }

}
