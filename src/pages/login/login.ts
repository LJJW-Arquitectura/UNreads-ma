import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user/user';
import { GlobalProvider } from "../../providers/global/global";

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
	user$;
	id$

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public provider: UserProvider,
  						public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
  	console.log("Username: "+this.username)
  	console.log("Password: "+this.password)
    //Esta es la linea que no se digna funcionar hasta no darle doble click
  	this.provider.getUserByUsernameAndPassword(this.username,this.password).subscribe(user => this.user$ = user);
    //yep, esa
    //mostramos el id del usuario autenticado a todo el resto de la aplicacion
    if(this.user$ != undefined){
      this.global.authenticatedId = this.user$.id;
    }
  }
  goRegister(){
  	this.navCtrl.push(RegisterPage);
  }
}
