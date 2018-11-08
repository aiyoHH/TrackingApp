import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ImagePicker } from "@ionic-native/image-picker";
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { PlaHomePage } from '../pages/plantation/home/home';
import { PlotsPage } from '../pages/plantation/plots/plots';
import { OperationPage } from '../pages/plantation/operation/operation';
import { AddOperationPage } from "../pages/plantation/add-operation/add-operation";
import { LoginPage } from '../pages/login/login';

import { CirHomePage } from "../pages/circulation/cirhome/cirhome";
import { ScanHistoryPage } from "../pages/circulation/scan-history/scan-history";
import { ScanResultPage } from "../pages/circulation/scan-result/scan-result";
import { ScanHistoryDetailPage } from "../pages/circulation/scan-history-detail/scan-history-detail";
import { ProHomePage } from "../pages/producation/prohome/prohome";
import { ApiProvider } from '../providers/api/api';
import { ToastProvider } from '../providers/toast/toast';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from "@ionic-native/camera";
import { Base64 } from "@ionic-native/base64";
import { IonicStorageModule } from "@ionic/storage";
// import { BarcodeScanner } from "@ionic-native/barcode-scanner";
// import { QRScanner } from "@ionic-native/qr-scanner";
import { ZBar } from "@ionic-native/zbar";



@NgModule({
  declarations: [
    MyApp,
    PlaHomePage,
    PlotsPage,
    OperationPage,
    AddOperationPage,
    CirHomePage,
    ScanHistoryPage,
    ScanResultPage,
    ScanHistoryDetailPage,
    ProHomePage,
    LoginPage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlaHomePage,
    PlotsPage,
    OperationPage,
    AddOperationPage,
    CirHomePage,
    ScanHistoryPage,
    ScanResultPage,
    ScanHistoryDetailPage,
    ProHomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    ApiProvider,
    ToastProvider,
    Camera,
    Base64,
    ZBar,
    // BarcodeScanner,
    // QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    
  ]
})
export class AppModule {}
