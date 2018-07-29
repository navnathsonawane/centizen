import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from './../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  signupForm: FormGroup;
  subscriptions = ["Basic", "Advanced", "Pro"];
  constructor(private fb: FormBuilder, private sharedService: SharedService, private router:Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required,
      Validators.pattern('^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      subscription: [this.subscriptions[0], Validators.required]
    })
  }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }

  get subscription() { return this.signupForm.get('subscription'); }

  clearForm() {
    this.signupForm.reset();
    this.signupForm.get('subscription').patchValue(this.subscriptions[0]);
  }

  addUser() {
    this.sharedService.setUserData(this.signupForm.value);
    this.clearForm();
    this.router.navigate(["display"]);
  }

}
