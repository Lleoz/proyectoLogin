import { DataStoreService } from './../../services/data-store.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      genre: ['', Validators.required]
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

  get genre() {
    return this.registerForm.get('genre');
  }

  register(form) {
    const {fullName, email, birthday, phoneNumber, genre} = form.value;
    const userData = {
      id: uuidv4(),
      fullName,
      email,
      birthday,
      phoneNumber,
      genre
    };

    this.dataStoreService.addUser(userData);
    this.registerForm.reset();
  }

}
