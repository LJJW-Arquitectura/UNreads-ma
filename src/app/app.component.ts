import { Component,ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AllbooksPage } from '../pages/allbooks/allbooks';
import { AllbooklistPage } from '../pages/allbooklist/allbooklist';
import { CreatereviewPage } from '../pages/createreview/createreview';
import { CreatesuggestionPage } from '../pages/createsuggestion/createsuggestion';
import { InfobookPage } from '../pages/infobook/infobook';
import { InfobooklistPage } from '../pages/infobooklist/infobooklist';
import { LoginPage } from '../pages/login/login';
import { MybooklistPage } from '../pages/mybooklist/mybooklist';

import { UserProvider } from '../providers/user/user';
import { GlobalProvider } from "../providers/global/global";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  username;
  myIcon: string;
  @ViewChild(Nav) nav: Nav;
  rootPage:any = AllbooksPage;
  pages: Array<{title: string, component: any, openTab? : any}>;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public global: GlobalProvider) {

    this.pages = [
    { title: 'Login', component: LoginPage },
    { title: 'Libros', component: AllbooksPage },
    { title: 'InfoBook', component: InfobookPage },
    { title: 'Listas', component: AllbooklistPage }
    ];
    if(this.global.authenticatedId == 0){
      this.username = "Guest";
    }
    else{
      this.username = "Person";
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
  openPage(page, 
    public provideruser: UserProvider) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    if(this.global.authenticatedId == 0){
      this.username = "Guest";
    }
    else{
      provideruser.getUserById(review[i].user_id).subscribe(user =>{
          this.username = user.username})
    }
  }


}

