import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeContainerComponent } from './home-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [HomeContainerComponent],
  exports: [HomeContainerComponent]
})
export class HomeContainerComponentModule {}
