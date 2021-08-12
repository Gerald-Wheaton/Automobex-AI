import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomobexHeaderComponent } from './automobex-header.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AutomobexHeaderComponent],
  exports: [AutomobexHeaderComponent]
})
export class AutomobexHeaderComponentModule {}
