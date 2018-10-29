import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlotsPage } from './plots';

@NgModule({
  declarations: [
    PlotsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlotsPage),
  ],
})
export class PlotsPageModule {}
