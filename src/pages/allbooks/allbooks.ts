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

  books$: Observable<any>;
  books_filtered$: Observable<any>;
  searchTerm: string = '';
  pro
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider: BooksProvider) {
  	this.pro = provider
    this.books$ = provider.getAllBooks();
    this.books_filtered$ = this.books$;
  } 

  setFilteredItems(){
  	
  	this.books_filtered$.pipe(filter(book => book.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1))
  	this.books_filtered$ = this.pro.getAllBooks();
  	console.log(this.books_filtered$.toString())
  }

  itemTapped(event, book_id) {
    this.navCtrl.push(InfobookPage, {
      id: book_id
    });
  }

}
