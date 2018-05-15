import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, PopoverController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  currentChat: any = '';
  customerQueue: any = [
    {
      name: 'CUST #1',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #2',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #3',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #4',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #5',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #6',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #7',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #8',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #9',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #10',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #11',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #12',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    },
    {
      name: 'CUST #13',
      custChat: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      branchChat: 'Welcome to Street Biriyani. How may i assist you...!'
    }
  ]
  customers: any = [
  ]
  constructor(public navCtrl: NavController, public popover: PopoverController, public event: Events) {
    event.subscribe('addQueue:chat',(page,index) =>{
      this.customers.push(this.customerQueue[index]);
      if(this.customers.length > 10){
        this.customers.splice(0,1);
      }
      this.customerQueue.splice(index,1);
      this.currentChat = this.customers[this.customers.length - 1].name;
    })
  }
  notification: any = 4;

  backButtonClick() {
    this.navCtrl.pop();
  }
  presentpopover(event) {
    let popup = this.popover.create('ChatPopoverPage', { currentList: this.customers, queue: this.customerQueue });
    popup.present({
      ev: event
    })
  }
  changeChat(index){
    this.currentChat = this.customers[index].name;
  }
}