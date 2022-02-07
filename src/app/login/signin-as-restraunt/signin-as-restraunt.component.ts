import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SharedDialogComponent } from 'src/app/shared/shared-dialog/shared-dialog.component';
@Component({
  selector: 'app-signin-as-restraunt',
  templateUrl: './signin-as-restraunt.component.html',
  styleUrls: ['./signin-as-restraunt.component.scss']
})
export class SigninAsRestrauntComponent implements OnInit {

  public logInForm: FormGroup;
  registeredUser = [];
  check: boolean = false;
  registeredOrNot: boolean;
  invalidCredentials: boolean=false;
  constructor(private fb: FormBuilder, private dialog: MatDialog,private router:Router) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('restrauntDetails'));
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
          localStorage.setItem("loggedInAdmin",JSON.stringify(this.registeredUser[i]));
          this.router.navigateByUrl("restraunt/home");
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
