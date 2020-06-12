import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { UserDataService } from './user-data.service';

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
    private route: Router
  ) { }

  async ngOnInit() {
    this.initializeForm();

    const email: string = this.router.snapshot.paramMap.get('email');
    const resp = await this.userDataService.get(email);

    this.userEdit = resp.result;
    this.userEditId = this.userEdit.id;
    console.log(this.userEdit);

    this.editUserForm.patchValue(this.userEdit);
    this.editUserForm.patchValue({
      birthDate: this.userEdit.birthDate.substring(0, 10)
    });

  }

  initializeForm() {
    this.editUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      genre: ['', Validators.required]
    });
  }

  edit(form) {
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
    console.log(userData);

    this.route.navigate(['/users/list']);
  }


  get name() {
    return this.editUserForm.get('name');
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
