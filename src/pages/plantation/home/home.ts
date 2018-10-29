import { Component,OnInit } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { PlotsPage } from "../plots/plots";
import { BaseBean } from "../../../app/bean/baseBean";
import { ApiProvider } from '../../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class PlaHomePage implements OnInit{

  public list:BaseBean[];

  constructor(public navCtrl: NavController,public menu:MenuController,public apiProvider:ApiProvider) {

  }

  //与ionicLifeCycle的ionViewDidLoad一致
  ngOnInit() {
   this.getData();
  }

  jumpPage(){
    this.navCtrl.push(PlotsPage);
  }

  getData(){
     this.apiProvider.getHomeData().subscribe(data=>this.list=data)
  }

}
