import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddOperationPage } from "../add-operation/add-operation";
import { OpeBean } from "../../app/bean/opeBean";
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the OperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operation',
  templateUrl: 'operation.html',
})
export class OperationPage implements OnInit{

  public opeInfo:OpeBean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiProvider:ApiProvider) {
  }

  ngOnInit(){
    this.getData(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationPage');
  }

  jumpPage(){
    this.navCtrl.push(AddOperationPage);
  }

  getData(){
    this.apiProvider.getOperataionData().subscribe(data=>this.opeInfo=data);
  }

  

}
