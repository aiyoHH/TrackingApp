import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ZBar, ZBarOptions  } from "@ionic-native/zbar";
import { ScanHistoryPage } from "../scan-history/scan-history";
import { ScanResultPage } from "../scan-result/scan-result";
import { ToastProvider } from "../../../providers/toast/toast";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cirhome',
  templateUrl: 'cirhome.html',
})
export class CirHomePage {

  scanResult: any;

   options: ZBarOptions = {
    text_title:'条码扫描',
    text_instructions:'请将相机对准条码',
    flash: 'auto',
    drawSight: true
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,private zbar:ZBar,private  toastProvider: ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openScan(): void {
    this.zbar.scan(this.options)
    .then(result => {
     
      this.navCtrl.push(ScanResultPage, { 'scanResult': result });
    })
    .catch(error => {
       this.toastProvider.create("扫描结果异常\r\n"+error).present();
    });

    // this.navCtrl.push(ScanResultPage, { 'scanResult': "1df9dfjerjldf" });
  }

  public checkHistory(): void {
    this.navCtrl.push(ScanHistoryPage);
     
   
  }

}
