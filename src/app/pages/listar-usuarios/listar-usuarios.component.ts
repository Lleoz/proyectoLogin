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
  pageSt: number;
  pageSizeSt: number;
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.total = usersList.length;

    this.pageSt = 1;
    this.pageSizeSt = 10;

    this.updatePages();
  }

  get page() {
    return this.pageSt;
  }

  set page(page: number) {
    this.pageSt = page;
    this.updatePages();
  }

  get pageSize() {
    return this.pageSizeSt;
  }

  set pageSize(pageSize: number) {
    this.pageSizeSt = pageSize;
    this.updatePages();
  }

  private updatePages() {
    const pageBase = this.pageSt - 1;
    const itemsPage = Math.min(this.pageSizeSt, this.total);

    const pageFrom = pageBase * itemsPage;
    this.users = usersList.slice(pageFrom, pageFrom + itemsPage);
  }

  editUser(userId) {
    alert('Editar usuario ' + userId);
  }

}
