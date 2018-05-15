import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

/**
 * Generated class for the ChatPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-popover',
  templateUrl: 'chat-popover.html',
})
export class ChatPopoverPage {
  queue: any;
  current: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events: Events) {
    this.queue = navParams.data.queue;
    this.current = navParams.data.currentList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPopoverPage');
  }

  close(index){
    this.viewCtrl.dismiss().then(()=>{
      this.events.publish('addQueue:chat', 'ChatPage', index);
    })
  }

}
