import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HomeContainerComponentModule } from '../home-container/home-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AutomobexHeaderComponentModule } from '../automobex-header/automobex-header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AutomobexHeaderComponentModule,
    HomeContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
