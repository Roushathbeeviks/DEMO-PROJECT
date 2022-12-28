import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  options:any=[]

  constructor(private route:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.voyageserv.GetVoyagePath().subscribe((res:any)=>
    // {
    //   // console.log(res);
    //   this.options=res.message[0]
    //   console.log(this.options);
    // })
  }

  openDialog(){
    this.dialog.open(LogoutComponent, {
        
    });
  }

}
