import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/shared/mock/user-store.service';
import { UserDto } from 'src/app/core/models/user-dto.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userStoreService: UserStoreService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      birthDate: ['', Validators.required],
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

  get birthDate() {
    return this.registerForm.get('birthDate');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get genre() {
    return this.registerForm.get('genre');
  }

  get passwordNoValid() {
    return this.registerForm.get('pwd').touched &&
      this.registerForm.get('pwd').invalid;
  }

  register(form) {
    const { name, lastName, secondLastName, email, pwd, birthDate, phoneNumber, genre } = form.value;
    const userData: UserDto = {
      id: 0,
      name,
      lastName,
      secondLastName,
      email,
      pwd,
      birthDate,
      phoneNumber,
      genre
    };

    this.userStoreService.addUser(userData);
    // this.registerForm.reset();
    this.route.navigate(['/home']);
  }

}
