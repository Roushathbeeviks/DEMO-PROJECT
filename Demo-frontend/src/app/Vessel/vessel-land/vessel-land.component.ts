import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { VesselListComponent } from '../vessel-list/vessel-list.component';

@Component({
  selector: 'app-vessel-land',
  templateUrl: './vessel-land.component.html',
  styleUrls: ['./vessel-land.component.css']
})
export class VesselLandComponent implements OnInit {
rows:any[]=[]
columnMode='standard';
columns = [];
ColumnMode = ColumnMode;
idi:any=[]
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  VesselForm()
  {
    this.dialog.open(VesselListComponent,{})
  }

}
