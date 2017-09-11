import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CreateNewCasePage } from '../pages';

/**
 * Generated class for the AddNewClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-new-client',
  templateUrl: 'add-new-client.html',
})
export class AddNewClientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewClientPage');
  }

  go() {
    this.navCtrl.push(CreateNewCasePage);
  }

}
