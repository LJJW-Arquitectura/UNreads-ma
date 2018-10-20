import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GraphQLModule } from './graphql.module';

import { BooksProvider } from '../providers/books/books';
import { HomePage } from '../pages/home/home';
import { AllbooksPage } from '../pages/allbooks/allbooks';
import { AllbooklistPage } from '../pages/allbooklist/allbooklist';
import { CreatereviewPage } from '../pages/createreview/createreview';
import { CreatesuggestionPage } from '../pages/createsuggestion/createsuggestion';
import { InfobookPage } from '../pages/infobook/infobook';
import { InfobooklistPage } from '../pages/infobooklist/infobooklist';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  AllbooksPage,
  AllbooklistPage,
  CreatereviewPage,
  CreatesuggestionPage,
  InfobookPage,
  InfobooklistPage,
  LoginPage,
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  GraphQLModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  AllbooksPage,
  AllbooklistPage,
  CreatereviewPage,
  CreatesuggestionPage,
  InfobookPage,
  InfobooklistPage,
  LoginPage,
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  BooksProvider
  ]
})



export class AppModule {
}
