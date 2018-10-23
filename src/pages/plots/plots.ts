import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";
import { OperationPage } from "../operation/operation";
import { PlotsBean } from "../../app/bean/plotsBean";


@IonicPage()
@Component({
  selector: 'page-plots',
  templateUrl: 'plots.html',
})
export class PlotsPage implements OnInit{


  items:PlotsBean;

  // public items = {
  //   info: { id: 39, serial: '14AZ', category: '肉桂', principal: '李大仁',year:'2017', img: 'assets/imgs/cropland2.png', base: '新星肉桂种植基地', area: '4000亩', status: '进行中',company:'德兴县德鑫农业发展有限公司' },
  //   plots: [
  //   { area: '1500亩', serial: 'DK032',  img: 'assets/imgs/cropland2.png', plot: '地咀山北面'},
  //   { area: '1000亩', serial: 'DK040',  img: 'assets/imgs/cropland2.png', plot: '新寨山口塘'},
  //   { area: '500亩', serial: 'DK041',  img: 'assets/imgs/cropland2.png', plot: '	象牙山南面'},
  //   { area: '500亩', serial: 'DK042',  img: 'assets/imgs/cropland2.png', plot: '象牙山北面'},
  //   {area: '500亩', serial: 'DK022',  img: 'assets/imgs/cropland2.png', plot: '大坑山南面A片区'}]

  // }


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
