import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserDto } from 'src/app/core/models/user-dto.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userEdit: UserDto;
  editUserForm: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataStoreService: StorageService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();

    const id: string = this.router.snapshot.paramMap.get('id');
    // this.userEdit = this.dataStoreService.getUserById(id);

    this.editUserForm.patchValue(this.userEdit);
  }

  initializeForm() {
    this.editUserForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      genre: ['', Validators.required]
    });
  }

  edit(form) {
    const { name, lastName, secondLastName, email, pwd, birthDate, phoneNumber, genre } = form.value;
    const userData: UserDto = {
      id: this.userEdit.id,
      name,
      lastName,
      secondLastName,
      email,
      pwd,
      birthDate,
      phoneNumber,
      genre
    };

    // this.dataStoreService.updateUser(userData);
    this.route.navigate(['/list']);
  }


  get fullName() {
    return this.editUserForm.get('fullName');
  }

  get email() {
    return this.editUserForm.get('email');
  }

  get birthday() {
    return this.editUserForm.get('birthday');
  }

  get phoneNumber() {
    return this.editUserForm.get('phoneNumber');
  }

  get genre() {
    return this.editUserForm.get('genre');
  }

}
