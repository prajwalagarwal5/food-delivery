import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss']
})
export class SharedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private matDialogRef: MatDialogRef<SharedDialogComponent>) { }


  ngOnInit() {
    console.log(this.data)
  }

}
