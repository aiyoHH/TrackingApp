import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { BarcodeScanner } from "@ionic-native/barcode-scanner";
// import { QRScanner,QRScannerStatus  } from "@ionic-native/qr-scanner";

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

  scanResult:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openScan():void{
    // this.barcodeScanner.scan().then(barcodeData => {
    //   alert( barcodeData);
    //   this.scanResult=barcodeData.text;
    //  }).catch(err => {
    //   alert('Error'+err);
    //  });
  }

  public checkHistory():void{
    // this.navCtrl.push();
    // Optionally request the permission early
// this.qrScanner.prepare()
// .then((status: QRScannerStatus) => {
//    if (status.authorized) {
//      // camera permission was granted


//      // start scanning
//      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//        console.log('Scanned something', text);
//        this.scanResult=text;

//        this.qrScanner.hide(); // hide camera preview
//        scanSub.unsubscribe(); // stop scanning
//      });

//    } else if (status.denied) {
//      // camera permission was permanently denied
//      // you must use QRScanner.openSettings() method to guide the user to the settings page
//      // then they can grant the permission from there
//    } else {
//      // permission was denied, but not permanently. You can ask for permission again at a later time.
//    }
// })
// .catch((e: any) => console.log('Error is', e));
  }

}
