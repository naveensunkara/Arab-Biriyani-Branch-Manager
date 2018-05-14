import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-popover',
  templateUrl: 'order-popover.html',
})
export class OrderPopoverPage {
  show: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.data.value != 'ongoing')
      this.show = false;
  }

}
