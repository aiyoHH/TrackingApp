import { Component,OnInit } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { PlotsPage } from "../plots/plots";
import { BaseBean } from "../../app/bean/baseBean";
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage:当页面加载完毕时触发。它只会在新页面被创建时触发一次，如页面被缓存再一次触发，它不会有任何反应');
  }

  ionViewWillEnter(){
    console.log("Looks like I'm about to ionViewWillEnter :( 当页面即将加载时会触发。");
  }

  
  ionViewDidEnter(){
    console.log("Looks like I'm about to ionViewDidEnter :( 它的触发和ionViewDidLoad的区别在于，不管是第一次加载还是缓存加载它都会触发");
    
  }
  ionViewWillLeave(){
    console.log("Looks like I'm about to ionViewWillLeave :( 当前页面即将离场时触发");
    
  }

  ionViewDidLeave(){
    console.log("Looks like I'm about to ionViewDidLeave :( 当前页面完全离场时触发");
  }

  ionViewWillUnload(){
    console.log("当前页面即销毁时触发");
  }



}
