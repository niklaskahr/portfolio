import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(private dialog: MatDialog, private scrollService: ScrollService) { }

  toggleMenu() {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    line1?.classList.toggle('open');
    line2?.classList.toggle('open');
    line3?.classList.toggle('open');
  }

  openMenuDialog(): void {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '60%',
      maxWidth: '700px',
      height: 'fit-content',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  onScrollToSkilltree() {
    this.scrollService.scrollTo('skilltree');
  }

  onScrollToPortfolio() {
    this.scrollService.scrollTo('portfolio');
  }

  onScrollToAbout() {
    this.scrollService.scrollTo('about');
  }

  onScrollToContact() {
    this.scrollService.scrollTo('contact');
  }
}
