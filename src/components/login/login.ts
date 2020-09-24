import { Component, OnInit } from '@angular/core';
import { WindowDirective } from '../../directives/window/window';
import * as firebase from 'firebase';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */



export class PhoneNumber{
  country: string;
  line: string;

  get e164(){
    const num = this.country + this.line
    return '+${num}';
  }
}

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers: [ WindowDirective ]
})
export class LoginComponent implements OnInit{

  verificationid: any;
  windowRef:any;
  phone = new PhoneNumber()
  user:any;


  constructor(private win: WindowDirective) {
    
  }
  ngOnInit() {
    
    this.windowRef = this.win.windownRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
    this.windowRef.recaptchaVerifier.render()
    
  }

  add1(){
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phone.e164;
    
    firebase.auth().signInWithPhoneNumber(num,appVerifier).then(result =>{
      this.windowRef.confirmationResult = result;
    })
    .catch(error => console.log(error));
    }

    verify(){
      this.windowRef.confirmationResult
      .confirm(this.verificationid)
      .then(result =>{
        this.user = result.user;
      })
      .catch(error => console.log(error,"Incorrect"));
    }
      
    

}
