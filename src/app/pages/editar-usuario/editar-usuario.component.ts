import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  userEdit: User;
  editUserForm: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataStoreService: DataStoreService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();

    const id: string = this.router.snapshot.paramMap.get('id');
    this.userEdit = this.dataStoreService.getUserById(id);

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
    const { fullName, email, birthday, phoneNumber, genre } = form.value;
    const userData: User = {
      id: this.userEdit.id,
      fullName,
      email,
      birthday,
      phoneNumber,
      genre
    };

    this.dataStoreService.updateUser(userData);
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
