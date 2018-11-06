import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ZBar, ZBarOptions  } from "@ionic-native/zbar";


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
    flash: 'off',
    drawSight: false
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,private zbar:ZBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openScan(): void {
    // this.barcodeScanner.scan().then(barcodeData => {
    //   alert( barcodeData);
    //   this.scanResult=barcodeData.text;
    //  }).catch(err => {
    //   alert('Error'+err);
    //  });
  }

  public checkHistory(): void {
    // this.navCtrl.push();

    this.zbar.scan(this.options)
   .then(result => {
     this.scanResult=result; // Scanned code
   })
   .catch(error => {
      this.scanResult=error; // Error message
   });
   
  }

}
