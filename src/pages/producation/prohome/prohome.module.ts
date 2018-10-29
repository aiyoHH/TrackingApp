import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProHomePage } from './prohome';

@NgModule({
  declarations: [
    ProHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ProHomePage),
  ],
})
export class ProHomePageModule {}
