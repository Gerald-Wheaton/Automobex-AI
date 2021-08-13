import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InterestsModalComponent } from '../interests-modal/interests-modal.component';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
})
export class ProfileContainerComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() location: string;

  constructor(public popoverController: PopoverController) { }
  // constructor() {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: InterestsModalComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
