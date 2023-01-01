import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  Editprofile: any = FormGroup;
  users:any=[]
  paramid:any=[]
  id:any

  constructor(
    private route: Router,
    private formBuider: FormBuilder,
    private adminserv: AdminService,
    private router:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:any

  ) {}

  

  check() 
  {

   this.adminserv.EditProfile(this.paramid,this.Editprofile.value).subscribe((res:any) => {
   })
   
  }


  ngOnInit(): void {
    this.paramid=this.router.snapshot.paramMap.get('id')
    console.log("message",this.data)
   this.adminserv.GetUserById(this.data.data).subscribe((res:any) => {
   console.log(res);
   this.Editprofile.patchValue({
    Userid:res.message[0].Userid,
    firstname:res.message[0].firstname,
    lastname:res.message[0].lastname,
    email:res.message[0].email,
    contactnumber:res.message[0].contactnumber
   })
 

   })

    this.Editprofile = this.formBuider.group({
      Userid: ['', [Validators.required, Validators.minLength(2)]],
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-z].*'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('[a-zA-z].*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      contactnumber: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ],
      ],
      
    });
  }


}


