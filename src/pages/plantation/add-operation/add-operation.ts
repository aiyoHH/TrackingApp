import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Base64 } from '@ionic-native/base64';



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

  options: ImagePickerOptions = {
    maximumImagesCount: 1,

  };

  cameraOpts: CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true
  }

  public base64Image:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public imagePicker: ImagePicker,
    private camera: Camera, private base64: Base64, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOperationPage');
  }

  private getPicture() {
    if (this.imagePicker.hasReadPermission()) {
      this.imagePicker.getPictures(this.options).then((results) => {
        this.base64.encodeFile(results[0]).then((base64File: string) => {
          //里面已经添加了'data:image/jpeg;base64,'
          this.base64Image = base64File;
        }, (err) => {
          console.log(+"aaa=" + err);
        });

      }, (err) => {
        console.log(err);
      });
    } else {
      this.imagePicker.requestReadPermission();
    }
  }

  private takePhotos() {
    this.camera.getPicture(this.cameraOpts).then((imageData) => {
      console.log("takePhotos success=="+imageData)
      this.base64Image ='data:image/jpeg;base64,'+imageData;
    }, (err) => {
      alert("takePhotos erro=" + err)
    });
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: '选择一种方式',
      buttons: [
        {
          text: '相册',
          handler: () => {
            actionSheet.dismiss();
            this.getPicture();
          }
        }, {
          text: '拍照',
          handler: () => {
            actionSheet.dismiss();
            this.takePhotos();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    actionSheet.present();
  }

  popComplete() {
    this.navCtrl.pop();
  }

}
