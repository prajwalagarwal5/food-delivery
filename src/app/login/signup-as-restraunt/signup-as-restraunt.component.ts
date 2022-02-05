import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SharedDialogComponent } from 'src/app/shared/shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-signup-as-restraunt',
  templateUrl: './signup-as-restraunt.component.html',
  styleUrls: ['./signup-as-restraunt.component.scss']
})
export class SignupAsRestrauntComponent implements OnInit {
  public signUpForm: FormGroup;
  registeredUser = [];
  check: boolean = false;
  signUpSuccess = false;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('restrauntDetails'));
    console.log(this.registeredUser);
    this.inititaliseForm();
  }

  inititaliseForm() {
    this.signUpForm = this.fb.group({
      id: new FormControl(''),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      itemList: new FormArray([]),
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
      this.signUpForm.get('id').setValue(this.registeredUser.length+1);
      this.registeredUser.push(this.signUpForm.value);
      localStorage.setItem('restrauntDetails', JSON.stringify(this.registeredUser));
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
