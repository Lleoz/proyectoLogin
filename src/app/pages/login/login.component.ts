import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserStoreService } from 'src/app/shared/mock/user-store.service';
import { UserDto } from 'src/app/core/models/user-dto.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userStoreService: UserStoreService) {
    this.loadForm();
  }

  ngOnInit(): void {

    this.form.controls.email.setValue(localStorage.getItem('correo') || '');
    if (this.form.controls.email.value !== '') { this.form.controls.recordarme.setValue(true); }

  }

  get emailNoValid() {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }

  get passwordNoValid() {
    return this.form.get('password').touched && this.form.get('password').invalid;
  }

  login() {

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(controls => {
        controls.markAllAsTouched();
      });
    }

    const user: UserDto = this.userStoreService.getUserByEmail(this.form.controls.email.value);

    if (!user) {
      alert('El usuario o contraseña es incorrecto');
      return;
    }

    if (user.pwd !== this.form.controls.password.value) {
      alert('El usuario o contraseña es incorrecto');
      return;
    }

    if (this.form.controls.recordarme.value) {
      localStorage.setItem('correo', this.form.controls.email.value);
    }

    this.route.navigate(['/users/list']);
  }

  loadForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      recordarme: [false],
    });
  }

}
