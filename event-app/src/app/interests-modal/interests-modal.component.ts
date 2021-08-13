import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-interests-modal',
  templateUrl: './interests-modal.component.html',
  styleUrls: ['./interests-modal.component.scss'],
})
export class InterestsModalComponent {

  constructor(public popoverController: PopoverController) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.popoverController.dismiss({
      'dismissed': true
    });
  }
}
