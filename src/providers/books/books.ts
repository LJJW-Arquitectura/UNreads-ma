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

}
