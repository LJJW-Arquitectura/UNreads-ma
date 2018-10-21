import { Injectable } from '@angular/core';  
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';

const queryAllBooks = gql`  
  query allBooks {
    allBooks {
      id
      title
      authors
      numPages
      plot
    }
  }
`;

const queryBookById = gql`  
query($id: Int!){
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
      query: queryAllBooks,
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
      .map(result => result.data.allBooks);
  }

  getBookById(book_id: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryBookById,
      variables: {
        id: book_id
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
      .map(result => result.data.bookById);
  }
}
