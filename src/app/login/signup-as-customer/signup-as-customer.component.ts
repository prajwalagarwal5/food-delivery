import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SharedDialogComponent } from 'src/app/shared/shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-signup-as-customer',
  templateUrl: './signup-as-customer.component.html',
  styleUrls: ['./signup-as-customer.component.scss']
})
export class SignupAsCustomerComponent implements OnInit {
  signUpForm: FormGroup;
  registeredUser = [];
  check: boolean = false;
  signUpSuccess = false;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('customerDetails'));
    this.inititaliseForm();
  }

  inititaliseForm() {
    this.signUpForm = this.fb.group({
      id: new FormControl(''),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      name: new FormControl('', Validators.required),
      cart: new FormArray([]),
      orders: new FormArray([])
    })
  }

  signUp() {
    this.signUpSuccess = false;
    for (var i = 0; i < this.registeredUser.length; i++) {
      if (this.registeredUser[i].emailId == this.signUpForm.get('emailId').value) {
        this.check = true;
        break;
      }
    }
    if (!this.check) {
      console.log(this.signUpForm.value)
      this.signUpForm.get('id').setValue(this.registeredUser[this.registeredUser.length-1].id+1);
      this.registeredUser.push(this.signUpForm.value);
      localStorage.setItem('customerDetails', JSON.stringify(this.registeredUser));
      this.signUpSuccess = true;
    }
    else {
      this.dialog.open(SharedDialogComponent, {
        data: {
          text: "This Email is already registered with us!"
        }
      })
    }
    this.check = false;

  }

}
