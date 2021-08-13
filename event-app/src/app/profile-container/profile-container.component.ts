import { Component, OnInit, Input } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
})
export class ProfileContainerComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() location: string;

  // constructor(public modalController: ModalController) { }
  constructor() {}

  ngOnInit() {}

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  // }
}
