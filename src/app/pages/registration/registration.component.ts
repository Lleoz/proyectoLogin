import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { MsgType, MESSAGE_GENERIC_ERROR } from 'src/app/core/models/consts';
import { RegistrationDataService } from './registration-data.service';
import { AlertService } from 'src/app/core/helpers/alert.service';
import { ToastService } from 'src/app/core/helpers/toast.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenreType } from 'src/app/core/models/genre-type';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationDataService: RegistrationDataService,
    private route: Router,
    private alertService: AlertService,
    private toastService: ToastService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      genre: ['', Validators.required]
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get lastName() {
    return this.registerForm.get('lastName');
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

  async register(form) {
    this.spinner.show();

    try {

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
      console.log('userData', userData);
      const resp = await this.registrationDataService.Register(userData);

      if (resp.status !== 200) {
        await this.alertService.show('Registro', MESSAGE_GENERIC_ERROR, MsgType.ERROR);
        return;
      }

      this.spinner.hide();
      this.route.navigate(['/home']);

    } catch (error) {
      this.spinner.hide();
      await this.alertService.show('Registro', MESSAGE_GENERIC_ERROR, MsgType.ERROR);
    }

  }

}
