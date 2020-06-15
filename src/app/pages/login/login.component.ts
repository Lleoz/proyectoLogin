import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDataService } from './login-data.service';
import { SecurityService } from 'src/app/shared/services/security.service';
import { AlertService } from 'src/app/core/helpers/alert.service';
import { MsgType, MESSAGE_GENERIC_ERROR } from 'src/app/core/models/consts';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastService } from 'src/app/core/helpers/toast.service';

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
    private securityService: SecurityService,
    private loginDataService: LoginDataService,
    private alertService: AlertService,
    private toastService: ToastService,
    private spinner: NgxSpinnerService) {
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

  async login() {
    this.spinner.show();

    if (this.form.invalid) {
      this.spinner.hide();
      return Object.values(this.form.controls).forEach(controls => {
        controls.markAllAsTouched();
      });
    }

    if (this.form.controls.recordarme.value) {
      localStorage.setItem('correo', this.form.controls.email.value);
    }

    try {

      // Ejecuta el login
      const resp = await this.loginDataService.Login(this.form.value);

      if (resp.status !== 200) {
        await this.alertService.show('Login', 'El usuario o contraseña es incorrecto.', MsgType.ERROR);
        return;
      }

      this.securityService.SetAuthorizationData(resp.result.token);
      this.spinner.hide();
      this.toastService.showSuccess('Bienvenido!');
      this.route.navigate(['/users/list']);

    } catch (error) {
      this.spinner.hide();
      await this.alertService.show('Login', MESSAGE_GENERIC_ERROR, MsgType.ERROR);
    }
  }

  loadForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      recordarme: [false],
    });
  }

}
