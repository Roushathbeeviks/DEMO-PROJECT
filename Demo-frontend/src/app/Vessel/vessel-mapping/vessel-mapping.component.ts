import { Component, OnInit } from '@angular/core';
import {  FormBuilder,
  FormControl,
  FormGroup,} from '@angular/forms';
import { IDropdownSettings} from 'ng-multiselect-dropdown'; 
import { VesselMappingService } from 'src/app/services/vessel-mapping.service';

@Component({
  selector: 'app-vessel-mapping',
  templateUrl: './vessel-mapping.component.html',
  styleUrls: ['./vessel-mapping.component.css']
})
export class VesselMappingComponent implements OnInit {
  VesselMappingForm:any=FormGroup
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings={};
  id:any
 
  constructor(private vesselmapserv:VesselMappingService,  private formBuilder: FormBuilder,) { }

  ngOnInit()  {
    this.dropdownList = [
      { item_id: 1, item_text: '1531 DERIVED TEST1' },
      { item_id: 2, item_text: '1531 DERIVED TEST2' },
      { item_id: 3, item_text: '1531-DAILY-SHIP' },
      { item_id: 4, item_text: '1531POSH' },
      { item_id: 5, item_text: 'ASIA DAWN' },
      {item_id:  6, item_text: 'ATHIRA1VESSEL'},
      {item_id:  7, item_text: 'ATHIRA2VESSEL'},
      {item_id:  8 , item_text: 'BALTIC SCORPION'},
      {item_id:  9, item_text: 'BLUE BUTTERFLY TEST'}
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.vesselmapserv.currentApprovalStageMessage.subscribe(msg => this.id = msg);
    
    this.VesselMappingForm=this.formBuilder.group({
      Userid:[],
      VesselName:[]
    })
  }



 Save()
  {
    this.vesselmapserv.PostVesselMapping(this.VesselMappingForm.value).subscribe((res:any)=>
    {
      console.log(res)
    })
  }
  get Userid() {
    return this.VesselMappingForm.get('Userid') as FormControl;
  }
  get VesselName() {
    return this.VesselMappingForm.get('VesselName') as FormControl;
  }
  

}
