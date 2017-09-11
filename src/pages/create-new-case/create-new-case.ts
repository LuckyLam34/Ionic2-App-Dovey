import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectAClientPage } from '../pages';

/**
 * Generated class for the CreateNewCasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-new-case',
  templateUrl: 'create-new-case.html',
})
export class CreateNewCasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewCasePage');
  }

  selectAClient() {
    this.navCtrl.push(SelectAClientPage);
  }

}
