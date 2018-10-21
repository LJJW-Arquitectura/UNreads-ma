import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';  

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	username:string;
	password:string;
	user$:Observable<any>;
	text:string;

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public provider: UserProvider) {
  	this.text = "logg"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
  	console.log("Username: "+this.username)
  	console.log("Password: "+this.password)
  	this.user$ = this.provider.getUserByUsernameAndPassword(this.username,this.password);
  }
  goRegister(){
  	this.navCtrl.push(RegisterPage);
  }
}
