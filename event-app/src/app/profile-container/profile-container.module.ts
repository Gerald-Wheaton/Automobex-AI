import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileContainerComponent } from './profile-container.component';
import { InterestsModalComponentModule } from '../interests-modal/interests-modal.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, InterestsModalComponentModule],
  declarations: [ProfileContainerComponent],
  exports: [ProfileContainerComponent]
})
export class ProfileContainerComponentModule {}
