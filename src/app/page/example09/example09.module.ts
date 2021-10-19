import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example09PageRoutingModule } from './example09-routing.module';

import { Example09Page } from './example09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example09PageRoutingModule
  ],
  declarations: [Example09Page]
})
export class Example09PageModule {}
