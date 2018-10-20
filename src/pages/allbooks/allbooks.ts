import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider: BooksProvider) {
    this.books$ = provider.getAllBooks();
  }

}
