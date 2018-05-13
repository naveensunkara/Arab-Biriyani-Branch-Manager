import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChatPage } from './chat';
import { MenuPage } from '../menu/menu';

@NgModule({
    declarations: [
        ChatPage
    ],
    imports: [
      IonicPageModule.forChild(ChatPage)
    ],
    exports: [
        ChatPage
    ]
  })
  export class ChatPageModule { }