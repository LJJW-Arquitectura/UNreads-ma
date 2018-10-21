import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the AllbooklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-allbooklist',
 	templateUrl: 'allbooklist.html',
 })
 export class AllbooklistPage {
 	Alllist$
 	lists$
 	pro:BooksProvider
 	searchTerm: string = '';

 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams,
 		public provider: BooksProvider) {
 		this.pro = provider
 		provider.getAllBooklist().subscribe(list => this.Alllist$ = list);
 		provider.getAllBooklist().subscribe(list => this.lists$ = list);
 	} 

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad AllbooklistPage');
 	}

 	setFilteredItems(){
 		this.pro.getAllBooklist().subscribe(list => this.Alllist$ = list);
 		this.lists$ = this.Alllist$.filter((item) => item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
 	} 	

 	trackByFn(index, list) {
 		return list.name + list.user;
 	}

 }
