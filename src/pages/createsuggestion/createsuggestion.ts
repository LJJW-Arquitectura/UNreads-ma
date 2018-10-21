import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { InfobookPage } from '../infobook/infobook';

/**
 * Generated class for the CreatesuggestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createsuggestion',
  templateUrl: 'createsuggestion.html',
})
export class CreatesuggestionPage {
	book_id1: number;
	book_id2: number;
  reason: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider) {
  }

  createSuggestion(){
    console.log(this.book_id1 , this.book_id2, this.reason);
    this.provider.createSuggestion(this.book_id1, this.book_id2, this.reason).subscribe(response => {
      console.log(response);
      this.navCtrl.push(InfobookPage, {
        id: this.book_id1
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatesuggestionPage');
  }

}
