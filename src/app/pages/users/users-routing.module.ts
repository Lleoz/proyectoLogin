import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserEditComponent } from './user-edit.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  // { path: 'details', component: UsersDetailsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }


