import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  constructor(public navCtrl: NavController, public popover: PopoverController) { }
  notification: any =4;
  customers: any = 'cust1';

  backButtonClick() {
    this.navCtrl.pop();
  }
  presentpopover(event){
    let popup = this.popover.create('ChatPopoverPage');
    popup.present({
      ev: event
    })
  }
}