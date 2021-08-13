import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { CreateContainerComponentModule } from '../create-container/create-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { AutomobexHeaderComponentModule } from '../automobex-header/automobex-header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AutomobexHeaderComponentModule,
    CreateContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
