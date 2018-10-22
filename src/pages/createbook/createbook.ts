import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { AllbooksPage } from '../allbooks/allbooks';
import { InfobookPage } from '../infobook/infobook';

@IonicPage()
@Component({
  selector: 'page-createbook',
  templateUrl: 'createbook.html',
})
export class CreatebookPage {
	title: string;
	publiser: string;
	numPages: number;
  isbn: string;
  plot: string;
  authors: Array<string> = [];
  genres: Array<string> = [];
  author: string;
  genre: string;
  id$

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatebookPage');
  }

  addAuthor(){
    this.authors.push(this.author);
  }

  addGenre(){
    this.genres.push(this.genre);
  }

  createBook(){
    this.provider.createBook(this.title, this.publiser, this.numPages, this.isbn, this.plot, this.authors, this.genres).subscribe(response => {
      this.navCtrl.push(InfobookPage, {
        id: response.data.createBook.id
      });
    })
  }
}
