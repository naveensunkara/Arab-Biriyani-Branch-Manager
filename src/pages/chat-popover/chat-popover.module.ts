import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPopoverPage } from './chat-popover';

@NgModule({
  declarations: [
    ChatPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPopoverPage),
  ],
})
export class ChatPopoverPageModule {}
