import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
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
