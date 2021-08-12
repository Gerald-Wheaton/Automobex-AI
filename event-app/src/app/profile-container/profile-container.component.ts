import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
})
export class ProfileContainerComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() location: string;

  constructor() { }

  ngOnInit() {}

}
