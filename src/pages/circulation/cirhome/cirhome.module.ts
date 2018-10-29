import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CirHomePage } from './cirhome';

@NgModule({
  declarations: [
    CirHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CirHomePage),
  ],
})
export class CirHomePageModule {}
