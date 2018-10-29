import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationPage } from './operation';

@NgModule({
  declarations: [
    OperationPage,
  ],
  imports: [
    IonicPageModule.forChild(OperationPage),
  ],
})
export class OperationPageModule {}
