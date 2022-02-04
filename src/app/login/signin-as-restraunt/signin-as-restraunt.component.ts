import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import *  as  data from '../../restraunt-details.json';
@Component({
  selector: 'app-signin-as-restraunt',
  templateUrl: './signin-as-restraunt.component.html',
  styleUrls: ['./signin-as-restraunt.component.scss']
})
export class SigninAsRestrauntComponent implements OnInit {

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
      password: new FormControl(''),
    })
  }
}
