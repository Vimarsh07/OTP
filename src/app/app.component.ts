import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

   firebaseConfig = {
    apiKey: "AIzaSyCTrdwjDeqsb9z2sJImwvkafGS5Qc7bSTw",
    authDomain: "gauth-392e4.firebaseapp.com",
    databaseURL: "https://gauth-392e4.firebaseio.com",
    projectId: "gauth-392e4",
    storageBucket: "gauth-392e4.appspot.com",
    messagingSenderId: "617133839955",
    appId: "1:617133839955:web:69510114116352c432d8a6"
  };
  firebase: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    AngularFireModule.initializeApp(this.firebaseConfig)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

