import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


declare var window;

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})


export class DetailPage {
  
 

constructor(public navCtrl: NavController, public navParams: NavParams) {}
  






  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
