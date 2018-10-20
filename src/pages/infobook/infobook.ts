import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
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
  book$: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider) {
    this.book$ = provider.getBookById();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad InfobookPage');
  // }

}
