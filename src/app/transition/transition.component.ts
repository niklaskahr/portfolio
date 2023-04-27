import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent {
  constructor() {
    AOS.init();
    AOS.refresh();
  }
}
