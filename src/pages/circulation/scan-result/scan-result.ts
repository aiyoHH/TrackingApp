import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.scanResult=navParams.get('scanResult');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanResultPage');
  }

  submit(){
    this.navCtrl.pop();
  }

}
