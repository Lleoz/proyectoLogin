import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListarUsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditarUsuarioComponent,
    canActivate: [AuthGuard]
  },
  
  { path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ LoginComponent, RegistrationComponent, HomeComponent, ListarUsuariosComponent, EditarUsuarioComponent  ]