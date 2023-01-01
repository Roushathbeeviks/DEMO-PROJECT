import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {
rows:any[]=[]
columnMode='standard';
columns = [];
ColumnMode = ColumnMode;
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // rows = ELEMENT_DATA;

  constructor(private adminserv:AdminService) { }

  ngOnInit(): void {
    this.adminserv.AllUsers().subscribe((res:any)=>
    {
      this.rows = res.message;
      console.log("users",this.rows);
    });
  
  }


}
