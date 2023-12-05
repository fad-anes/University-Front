import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expiration-dialog',
  templateUrl: './expiration-dialog.component.html',
  styleUrls: ['./expiration-dialog.component.css']
})
export class ExpirationDialogComponent {
  constructor(private dialogRef: MatDialogRef<ExpirationDialogComponent>) {}

 

  onLogoutClick(): void {
    this.dialogRef.close('logout');
  }

  onRegenerateTokenClick(): void {
    this.dialogRef.close('regenerate');
  }
}
