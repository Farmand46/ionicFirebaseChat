import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaJvhnUhkDVXSBDK_EdmTFCe-LnLBG3IM",
    authDomain: "fir-projektforsoeg.firebaseapp.com",
    databaseURL: "https://fir-projektforsoeg.firebaseio.com",
    projectId: "fir-projektforsoeg",
    storageBucket: "fir-projektforsoeg.appspot.com",
    messagingSenderId: "736756674716"
//
  };

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

