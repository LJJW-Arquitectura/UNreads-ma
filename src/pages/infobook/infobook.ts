import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { UserProvider }  from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';  

/**
 * Generated class for the InfobookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-infobook',
 	templateUrl: 'infobook.html',
 })
 export class InfobookPage {
 	book_id: number;
 	book$: Observable<any>;
 	reviews$: Observable<any>;
 	aux = []
 	constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider,public provideruser: UserProvider) {
 		this.book_id = navParams.get('id');
 		this.book$ = provider.getBookById(this.book_id);
 		this.reviews$ = provider.getBookReviewsByCode(this.book_id); 		
 		this.reviews$.subscribe(review =>{
 			for (var i = 0; i < review.length ; i++) {
 				provideruser.getUserById(review[i].user_id).subscribe(user =>{
 					this.aux.push(user.username)})
 				}
 		});
 	}

 	ionViewDidLoad() {
 	}

 }
