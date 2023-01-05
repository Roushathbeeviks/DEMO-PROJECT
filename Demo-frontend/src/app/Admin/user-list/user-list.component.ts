import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AdminService } from 'src/app/services/admin.service';
import { VesselMappingComponent } from 'src/app/Vessel/vessel-mapping/vessel-mapping.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
rows:any[]=[]
columnMode='standard';
columns = [];
ColumnMode = ColumnMode;
id:any
  constructor(private adminserv:AdminService,private route:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.adminserv.AllUsers().subscribe((res:any)=>
    {
      this.rows = res.message;
      // this.id=res.message.Userid;
      // console.log("users", this.rows);
      // console.log(this.id)
    });
  
  }
  navigate(){
    this.route.navigate(['/adminSignUp'])
  }
  Addvessel(id:any)
  {
    this.dialog.open(VesselMappingComponent,{})
  }

}