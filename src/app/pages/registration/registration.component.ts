import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      sex: ['', Validators.required]
    });
  }

  get fullName() {
    return this.registerForm.get('fullName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get birthday() {
    return this.registerForm.get('birthday');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get sex() {
    return this.registerForm.get('sex');
  }

  register(form) {
    const {fullName, email, birthday, phoneNumber, sex} = form.value;
    const userData = {
      fullName,
      email,
      birthday,
      phoneNumber,
      sex
    }
    
  }

}
