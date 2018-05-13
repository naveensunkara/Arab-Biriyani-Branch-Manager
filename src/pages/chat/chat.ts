import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  constructor(public navCtrl: NavController) { }

  customers: any = 'cust1';

  backButtonClick() {
    this.navCtrl.pop();
  }
}