
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VesselService } from 'src/app/services/vessel.service';

@Component({
  selector: 'app-vessel-list',
  templateUrl: './vessel-list.component.html',
  styleUrls: ['./vessel-list.component.css']
})
export class VesselListComponent implements OnInit {
  VesselForm:any=FormGroup
  Vesselflag:any[]=[]
  constructor(private vesselserv:VesselService, 
      private formBuider: FormBuilder,) { }

  ngOnInit(): void {
    this.VesselForm = this.formBuider.group({
      IMONumber:['',[Validators.required, Validators.minLength(2)]],
      VesselName:['',[Validators.required, Validators.minLength(2)]],
      flag:['',[Validators.required, Validators.minLength(2)]],
      VesselType:['',[Validators.required, Validators.minLength(2)]],
    })




    this.vesselserv.GetAllFlags().subscribe((res:any)=>
      {
        this.Vesselflag = res
        console.log(this.Vesselflag)
        
      })
  }
  Submit(){
    this.vesselserv.VesselForm(this.VesselForm.value).subscribe((res)=>
    {
      console.log(res)
    })
  }
  get IMONumber() {
    return this.VesselForm.get('IMONumber') as FormControl;
  }
  get VesselName() {
    return this.VesselForm.get('VesselName') as FormControl;
  }
  get VesselType() {
    return this.VesselForm.get('VesselType') as FormControl;
  }
  get flag() {
    return this.VesselForm.get('flag') as FormControl;
  }



}
