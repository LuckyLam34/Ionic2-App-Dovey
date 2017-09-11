import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddNewClientPage } from '../pages';

/**
 * Generated class for the SelectAClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-a-client',
  templateUrl: 'select-a-client.html',
})
export class SelectAClientPage {

  clients = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4',
    'Client 5',
    'Client 6',
    'Client 7',
    'Client 8'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAClientPage');
  }

  addClient() {
    this.navCtrl.push(AddNewClientPage);
  }

}
