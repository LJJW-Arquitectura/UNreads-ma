import { Injectable } from '@angular/core';  
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';

const queryAllBooks = gql`  
  query allBooks {
    allBooks {
      title
      authors
      numPages
      plot
    }
  }
`;

const queryBookById = gql`  
query {
  bookById(book_id: $id) {
    id
    title
    publisher
    numPages
    isbn
    plot
    authors
    genres
    cover {
      fileName
      fileType
      fileDownloadUri
      size
    }
  }
}
`;

/*
  Generated class for the BooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BooksProvider {

  constructor(private apollo: Apollo) { }

  getAllBooks(): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryAllBooks
    });

    return queryWatcher.valueChanges
      .map(result => result.data.allBooks);;
  }

  getBookById(): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryBookById,
      variables: {
        id: 1
      }
    });

    return queryWatcher.valueChanges
      .map(result => result.data.bookById);
  }
}
