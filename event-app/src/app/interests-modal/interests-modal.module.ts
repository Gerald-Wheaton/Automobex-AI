import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestsModalComponent } from '../interests-modal/interests-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [InterestsModalComponent],
  exports: [InterestsModalComponent]
})
export class InterestsModalComponentModule {}
