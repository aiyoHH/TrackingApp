import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
