import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
 
   
    
  ],
  declarations: [SignupComponent],
  exports: [
    
    MessageModule,
    MessagesModule,
    FormsModule
  ]
})
export class SignupModule { }
