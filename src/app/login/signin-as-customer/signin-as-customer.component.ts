import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SharedDialogComponent } from 'src/app/shared/shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-signin-as-customer',
  templateUrl: './signin-as-customer.component.html',
  styleUrls: ['./signin-as-customer.component.scss']
})
export class SigninAsCustomerComponent implements OnInit {
  public logInForm: FormGroup;
  check: boolean = false;
  registeredUser = [];
  registeredOrNot: boolean;
  invalidCredentials: boolean=false;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('customerDetails'));
    this.inititaliseForm()
  }
  
  inititaliseForm() {
    this.logInForm = this.fb.group({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    })
  }

  logIn(){
    this.invalidCredentials=false;
    for (var i = 0; i < this.registeredUser.length; i++) {
      if (this.registeredUser[i].emailId == this.logInForm.get('emailId').value) {
        if(this.registeredUser[i].password==this.logInForm.get('password').value){
          console.log("success")
                    
          //Add redirect url


        }
        else{
          this.invalidCredentials=true;
        }
        this.registeredOrNot=true;
        break;
      }
      else{
        this.registeredOrNot=false;       
        continue;
      }
    }
    if(!this.registeredOrNot){
      this.dialog.open(SharedDialogComponent, {
        data: {
          text: "This Email is not registered!"
        }
      })
    }
    this.registeredOrNot=false;       
  }
  
}
