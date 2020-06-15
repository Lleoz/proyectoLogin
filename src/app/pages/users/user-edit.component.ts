import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { UserDataService } from './user-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastService } from 'src/app/core/helpers/toast.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userEdit: UserDto;
  editUserForm: FormGroup;
  userEditId: number;

  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userDataService: UserDataService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.spinner.show();

    try {

      this.initializeForm();

      const id: number = +this.router.snapshot.paramMap.get('id');
      const resp = await this.userDataService.get(id);

      this.userEdit = resp.result;
      this.userEditId = this.userEdit.id;

      this.userEdit.birthDate = this.userEdit.birthDate.substring(0, 10);
      this.editUserForm.patchValue(this.userEdit);
      this.spinner.hide();
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
  }

  initializeForm() {
    this.editUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      genre: ['', Validators.required]
    });
  }

  async edit(form: any) {
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

      await this.userDataService.put(this.userEditId, userData);

      this.toastService.showSuccess(`El usuario ${this.userEdit.email} se modificó satisfactoriamente`); this.spinner.hide();
      this.spinner.hide();

      this.route.navigate(['/users/list']);
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
  }


  get name() {
    return this.editUserForm.get('name');
  }

  get lastName() {
    return this.editUserForm.get('lastName');
  }

  get email() {
    return this.editUserForm.get('email');
  }

  get birthDate() {
    return this.editUserForm.get('birthDate');
  }

  get phoneNumber() {
    return this.editUserForm.get('phoneNumber');
  }

  get genre() {
    return this.editUserForm.get('genre');
  }

}
