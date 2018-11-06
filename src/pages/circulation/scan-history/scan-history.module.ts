import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanHistoryPage } from './scan-history';

@NgModule({
  declarations: [
    ScanHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanHistoryPage),
  ],
})
export class ScanHistoryPageModule {}
