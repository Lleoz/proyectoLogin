import { Component, OnInit } from '@angular/core';
import { User, TypeGenero } from 'src/app/models/user.model';
import { usersList } from 'src/app/models/users';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  total = 0;
  page = 0;
  pageSize = 10;
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    const pageFrom = this.page * this.pageSize;
    this.users = usersList.slice(pageFrom, pageFrom + this.pageSize);
    this.total = usersList.length;
  }

}
