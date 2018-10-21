import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { filter } from 'rxjs/operators';  
import { InfobookPage } from '../infobook/infobook';
/**
 * Generated class for the InfobooklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-infobooklist',
 	templateUrl: 'infobooklist.html',
 })
 export class InfobooklistPage {

 	list$
 	books$ = []
 	ready = false
 	constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider) {
 		console.log("HPLA")
 		this.list$ = navParams.get('list')
 		var newbook
 		for (var i = this.list$.books.length - 1; i >= 0; i--) {
 			provider.getBookById(this.list$.books[i]).subscribe(book => this.books$.push(book))
 		} 		
 		this.ready = true
 		console.log(this.books$)
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad InfobooklistPage');
 	}

 }
