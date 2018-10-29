import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  // public toast;
  private duration:number=1200;
  constructor(public toastCtrl:ToastController) {
    console.log('Hello ToastProvider Provider');
  }

  create(msg:string){
    return this.toastCtrl.create({
      message: msg,
      duration: this.duration,
      position: 'top'
    });
  }

}
