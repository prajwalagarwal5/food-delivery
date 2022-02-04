import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import *  as  data from '../../userdetails.json';

@Component({
  selector: 'app-signin-as-customer',
  templateUrl: './signin-as-customer.component.html',
  styleUrls: ['./signin-as-customer.component.scss']
})
export class SigninAsCustomerComponent implements OnInit {
  public logInForm: FormGroup;
  registeredUser = (data as any).default;
  check: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inititaliseForm()
  }

  inititaliseForm() {
    this.logInForm = this.fb.group({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl(''),
    })
  }
}
