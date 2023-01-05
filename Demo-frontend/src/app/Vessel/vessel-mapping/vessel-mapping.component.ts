import { Component, OnInit } from '@angular/core';
import { IDropdownSettings, } from 'ng-multiselect-dropdown'; 

@Component({
  selector: 'app-vessel-mapping',
  templateUrl: './vessel-mapping.component.html',
  styleUrls: ['./vessel-mapping.component.css']
})
export class VesselMappingComponent implements OnInit {
  dropdownList:any = [];
  dropdownSettings:IDropdownSettings={};
  constructor() { }

  ngOnInit()  {
    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    this.dropdownSettings=
    {
      
    }
    {

    }
  }

  

}
