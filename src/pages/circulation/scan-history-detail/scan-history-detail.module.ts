import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanHistoryDetailPage } from './scan-history-detail';

@NgModule({
  declarations: [
    ScanHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanHistoryDetailPage),
  ],
})
export class ScanHistoryDetailPageModule {}
