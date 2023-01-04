import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VesselListComponent } from '../vessel-list/vessel-list.component';

@Component({
  selector: 'app-vessel-land',
  templateUrl: './vessel-land.component.html',
  styleUrls: ['./vessel-land.component.css']
})
export class VesselLandComponent implements OnInit {
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  VesselForm()
  {
    this.dialog.open(VesselListComponent,{})
  }

}
