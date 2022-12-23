import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css'],
})
export class AdminSignUpComponent implements OnInit {
  signup: any = FormGroup;
  constructor(
    private route: Router,
    private formBuider: FormBuilder,
    private adminserv: AdminService
  ) {}

  check() {
    console.log(this.signup.value);
    // console.log('signed up');
    // if()
    this.adminserv.SignupUser(this.signup.value).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.signup = this.formBuider.group({
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
      password: ['', [Validators.required]],
      role: ['', Validators.required],
      vesselname: ['', Validators.required],
    });
  }
  get Userid() {
    return this.signup.get('Userid') as FormControl;
  }
  get firstname() {
    return this.signup.get('firstname') as FormControl;
  }
  get lastname() {
    return this.signup.get('lastname') as FormControl;
  }
  get email() {
    return this.signup.get('email') as FormControl;
  }
  get contactnumber() {
    return this.signup.get('contactnumber') as FormControl;
  }
  get password() {
    return this.signup.get('password') as FormControl;
  }
  get role() {
    return this.signup.get('role') as FormControl;
  }
  get vesselname() {
    return this.signup.get('vesselname') as FormControl;
  }
}
