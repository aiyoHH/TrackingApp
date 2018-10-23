import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker,ImagePickerOptions } from "@ionic-native/image-picker";


/**
 * Generated class for the AddOperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-operation',
  templateUrl: 'add-operation.html',
})
export class AddOperationPage {

  options:ImagePickerOptions={
    maximumImagesCount:1
  };

   imgpath="assets/imgs/icon-picture.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,public imagePicker:ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOperationPage');
  }

  getPicture(){
    if(this.imagePicker.hasReadPermission()){
      this.imagePicker.getPictures(this.options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.imgpath=results[i];
        }
       
      }, (err) => { });
    }else{
    
      this.imagePicker.requestReadPermission();
    }
  }

  popComplete(){
    this.navCtrl.pop();
  }

}
