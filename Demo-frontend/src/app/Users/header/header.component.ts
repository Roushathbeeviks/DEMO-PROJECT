import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  check=false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  show(){
    this.check=true;
  }
  openDialog(){
    this.dialog.open(LogoutComponent, {
        
    });
  }

}
