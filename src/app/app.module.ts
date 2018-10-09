import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SecondPage} from "../pages/secondPage/secondPage";
import {ThirdPage} from "../pages/thirdPage/thirdPage";

import {Users} from "../services/users";
import { PlacesRest } from "../services/placesrest";
import { Sports } from "../services/sports";

import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    ThirdPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    ThirdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Users,
    PlacesRest,
    Sports,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
