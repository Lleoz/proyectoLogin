import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserDataService } from './user-data.service';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  total = 0;
  pageSt = 1;
  pageSizeSt = 10;
  users: UserDto[] = [];
  usersList: UserDto[] = [];

  constructor(
    private route: Router,
    private userDataService: UserDataService,
    private spinner: NgxSpinnerService
  ) { }

  async ngOnInit() {
    this.spinner.show();

    try {
      const resp = await this.userDataService.getAll();
      this.usersList = resp.result;

      this.total = this.usersList.length;

      this.updatePages();
      this.spinner.hide();
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
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
    this.users = this.usersList.slice(pageFrom, pageFrom + itemsPage);
  }

  editUser(id: number) {
    this.route.navigate([`/users/edit/${id}`]);
  }

}
