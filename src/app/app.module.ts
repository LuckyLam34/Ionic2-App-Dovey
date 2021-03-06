import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { CreateNewCasePage, SelectAClientPage, AddNewClientPage } from '../pages/pages';

import { SqlStorage } from '../shared/shared';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CreateNewCasePage,
    SelectAClientPage,
    AddNewClientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreateNewCasePage,
    SelectAClientPage,
    AddNewClientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SqlStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
