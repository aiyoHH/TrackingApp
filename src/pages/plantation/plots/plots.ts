import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../../providers/api/api";
import { OperationPage } from "../operation/operation";
import { PlotsBean } from "../../../app/bean/plotsBean";


@IonicPage()
@Component({
  selector: 'page-plots',
  templateUrl: 'plots.html',
})
export class PlotsPage implements OnInit{

  public items:PlotsBean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiProvider:ApiProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlotsPage');
  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.apiProvider.getPlotsData().subscribe(data=>this.items=data);
  }

  getRowListByGridList(size){
    var rowList = []
    for (var i = 0; i < this.items.plots.length; i += size) {
      rowList.push(this.items.plots.slice(i, i + size));
    }
    return rowList
  }

  jumpPage(){
    this.navCtrl.push(OperationPage);
  }


}
