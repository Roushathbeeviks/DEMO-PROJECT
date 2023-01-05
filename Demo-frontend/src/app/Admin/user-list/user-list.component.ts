import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AdminService } from 'src/app/services/admin.service';
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';
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
Userid:any
var:string=""
  constructor(private adminserv:AdminService,private route:Router,private dialog:MatDialog,private vesselmap:VesselMappingService) { }

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
    
    this.Userid = id;
    this.vesselmap.updateApprovalMessage(this.Userid)
    
    this.dialog.open(VesselMappingComponent,{
      height: '250px',
      width: '500px',})
  }

}