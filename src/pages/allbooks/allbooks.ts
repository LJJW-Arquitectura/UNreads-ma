import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { filter } from 'rxjs/operators';  
import { InfobookPage } from '../infobook/infobook';

/**
 * Generated class for the AllbooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-allbooks',
 	templateUrl: 'allbooks.html',
 })
 export class AllbooksPage {

 	books$
 	Allbooks$
 	searchTerm: string = '';
 	pro
 	refresh = true
 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams,
 		public provider: BooksProvider) {
 		this.pro = provider
 		provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
 		provider.getAllBooks().subscribe(book => this.books$ = book);
 	} 
 	setFilteredItems(){
 		this.books$ = this.Allbooks$.filter((item) => item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
 	} 	
 	cancel(){
 		
 		console.log("SADASDASDASDASDA")
 	}
 	trackByFn(index, book) {
 		return book.id;
 	}

	itemTapped(event, book_id) {
		this.navCtrl.push(InfobookPage, {
		id: book_id
		});
	}

}
