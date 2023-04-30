import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImprintDialogComponent } from '../imprint-dialog/imprint-dialog.component';
import { PrivacyPolicyDialogComponent } from '../privacy-policy-dialog/privacy-policy-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      document.querySelectorAll('.clickable').forEach(element => {
        element.classList.add('clickable-ready');
      });
    });
  }

  openImprintDialog(): void {
    const dialogRef = this.dialog.open(ImprintDialogComponent, {
      width: '60%',
      maxWidth: '700px',
      height: 'fit-content',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openPrivacyDialog(): void {
    const dialogRef = this.dialog.open(PrivacyPolicyDialogComponent, {
      width: '60%',
      maxWidth: '700px',
      height: 'fit-content',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}