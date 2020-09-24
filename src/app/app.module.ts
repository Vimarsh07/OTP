import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OtpPage } from '../pages/otp/otp';
import { DetailPage } from '../pages/detail/detail';
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';
import { LoginComponent } from '../components/login/login';



var firebaseConfig = {
  apiKey: "AIzaSyCTrdwjDeqsb9z2sJImwvkafGS5Qc7bSTw",
  authDomain: "gauth-392e4.firebaseapp.com",
  databaseURL: "https://gauth-392e4.firebaseio.com",
  projectId: "gauth-392e4",
  storageBucket: "gauth-392e4.appspot.com",
  messagingSenderId: "617133839955",
  appId: "1:617133839955:web:69510114116352c432d8a6"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtpPage,
    DetailPage,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtpPage,
    DetailPage,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
