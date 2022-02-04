import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import *  as  data from '../../userdetails.json';

@Component({
  selector: 'app-signup-as-customer',
  templateUrl: './signup-as-customer.component.html',
  styleUrls: ['./signup-as-customer.component.scss']
})
export class SignupAsCustomerComponent implements OnInit {
  signUpForm: FormGroup;
  registeredUser = (data as any).default;
  check: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inititaliseForm();
  }

  inititaliseForm() {
    this.signUpForm = this.fb.group({
      id: new FormControl(''),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl(''),
      name: new FormControl('', Validators.required),
      cart: new FormArray([]),
      orders: new FormArray([])
    })
  }

  onSignup() {
    for (var i = 0; i < this.registeredUser.length; i++) {
      if (this.registeredUser[i].emailId == this.signUpForm.get('emailId').value) {
        this.check = true;
        break;
      }
      else
        continue;
    }
    if (!this.check) {
      // var path = require('path');
      var data = JSON.stringify(this.registeredUser);
      var fs = require('fs');
      console.log(fs)
      fs.writeFile('myjsonfile.json', JSON, 'utf8');

    }
  }

}
