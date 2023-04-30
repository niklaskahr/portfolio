import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent {
  constructor(private scrollService: ScrollService) { }

  onScrollToSkilltree() {
    setTimeout(() => {
      this.scrollService.scrollTo('skilltree');
    }, 120);
  }

  onScrollToPortfolio() {
    setTimeout(() => {
      this.scrollService.scrollTo('portfolio');
    }, 120);

  }

  onScrollToAbout() {
    setTimeout(() => {
      this.scrollService.scrollTo('about');
    }, 120);

  }

  onScrollToContact() {
    setTimeout(() => {
      this.scrollService.scrollTo('contact');
    }, 120);

  }
}
