import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImprintDialogComponent } from '../imprint-dialog/imprint-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    document.body.style.overflow = 'hidden';

    const dialogRef = this.dialog.open(ImprintDialogComponent, {
      width: '75vw',
      height: '55vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      document.body.style.overflow = 'unset';
    });
  }
}
