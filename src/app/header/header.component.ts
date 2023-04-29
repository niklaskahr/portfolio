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
  isMenuOpen: boolean = false;

  constructor(private dialog: MatDialog, private scrollService: ScrollService) { }

  openMenuDialog(): void {
    this.toggleMenu();
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '60%',
      maxWidth: '700px',
      height: 'fit-content',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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
