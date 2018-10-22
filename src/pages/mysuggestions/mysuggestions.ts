import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { GlobalProvider } from '../../providers/global/global';
import { InfobookPage } from '../infobook/infobook';

@IonicPage()
@Component({
	selector: 'page-mySuggestions',
	templateUrl: 'mySuggestions.html',
})
export class MySuggestionsPage {
	
	suggestions$
	auxid1 = []
	auxid2 = []
	myId
	user
	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider) {
			this.suggestions$ = provider.getUserSuggestionsByCode(this.globalProvider.authenticatedId);
			
			this.suggestions$.subscribe(suggestion =>{
				if(suggestion.length != 0){
				for (var i = 0; i < suggestion.length ; i++) {
					console.log("book_id1=" +suggestion[i].book_id1 + "book_id2=" +suggestion[i].book_id2)
					provider.getBookById(suggestion[i].book_id1).subscribe(book =>{
						this.auxid1.push(book.title)})	
						
					provider.getBookById(suggestion[i].book_id2).subscribe(book =>{
						this.auxid2.push(book.title)})
					}}
				});
					this.myId = globalProvider.authenticatedId 
					this.user = globalProvider.user 
				} 
				
				itemTapped(event, book_id) {
					this.navCtrl.popToRoot()
					this.navCtrl.push(InfobookPage, {
						id: book_id
					});
				}
				
			}
			