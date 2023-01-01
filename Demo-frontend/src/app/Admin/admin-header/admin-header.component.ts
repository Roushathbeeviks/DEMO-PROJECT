import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VoyageplanService } from 'src/app/services/voyageplan.service';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  options:any[]=[]
  users:any[] = [];

  constructor(private route:Router,private dialog: MatDialog,private voyageserv:VoyageplanService,private adminserv:AdminService) { }

  ngOnInit(): void {

    // this.adminserv.AllUsers().subscribe((res:any) =>{
    //   console.log(res.message)
    //   this.users=res.message
      // console.log(typeof this.users)
    // })
    // this.voyageserv.GetVoyagePath().subscribe((res:any)=>
    // {
  
    //   this.options=res
    //   console.log(typeof this.options )
    //   console.log(this.options);
    // })
  }

  openDialog(){
    this.dialog.open(LogoutComponent, {
        
    });
  }

}
