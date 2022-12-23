import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: any = FormGroup;
  arr:any= [];

  constructor(private route: Router, private adminserv: AdminService,private formBuider:FormBuilder) {}

  ngOnInit(): void {
    this.LoginForm = this.formBuider.group({
      Userid: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    this.getUsers()
  }

getUsers()
{
  this.adminserv.AllUsers().subscribe((res)=>
  {
    // console.log(res);
    // this.arr = res.valueOf();
    console.log(res);
    // this.arr=res
    console.log(typeof this.arr)
  })
}


  submit() {
    var formData = this.LoginForm.value;
    var data={
      Userid:formData.Userid,
      password: formData.password
    }

    for (var val of this.arr) {
      var a = val['Userid'];
      var b=data.Userid;
      var c = val['password'];
      var d = data.password;;
      var e = val['role'];
      var f="admin"
    }
    console.log(a)
    console.log(b)

    this.adminserv.Login(data).subscribe((res)=>
    {
      console.log(res)
      JSON.stringify(res)
      console.log( typeof res)
      alert(res);
    })
   
  }
}
