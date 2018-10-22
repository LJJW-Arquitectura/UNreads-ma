import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { InfobookPage } from '../infobook/infobook';
import { ToastController } from 'ionic-angular';

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
  Allbooks$
  booklist= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider,
    public toastCtrl: ToastController) {
    provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
  }
  
  createSuggestion(){
    console.log(this.book_id1 , this.book_id2, this.reason);
    if(this.book_id1 == this.book_id2){
      console.log("iguales");
      this.sameBook();
    }else if(this.reason == null){
      this.nullReason();
    }
    else{   
      this.provider.createSuggestion(this.book_id1, this.book_id2, this.reason).subscribe(response => {
        console.log(response);
        this.navCtrl.push(InfobookPage, {
          id: this.book_id1
        });
      })}
    }

    sameBook() {
      const toast = this.toastCtrl.create({
        message: 'Los libros a recomendar deben ser diferentes',
        duration: 3000
      });
      toast.present();
    } 

    nullReason(){
        const toast = this.toastCtrl.create({
          message: 'Todos los campos son obligatorios',
          duration: 3000
        });
        toast.present();
      } 

    ionViewDidLoad() {
      console.log('ionViewDidLoad CreatesuggestionPage');
    }
    
  }
  