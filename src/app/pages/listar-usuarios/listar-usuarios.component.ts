import { Component, OnInit } from '@angular/core';
import { User, TypeGenero } from 'src/app/models/user.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  users: User[] = [{
    id: 1,
    nombreCompleto: 'Usuario 1',
    email: 'usuario1@mail.com',
    fechaDeNacimiento: new Date(1999, 3, 2),
    telefono: '+5422225555',
    genero: TypeGenero.Hombre
  },
  {
    id: 2,
    nombreCompleto: 'Usuario 2',
    email: 'usuario2@mail.com',
    fechaDeNacimiento: new Date(2001, 5, 21),
    telefono: '+5599998888',
    genero: TypeGenero.Mujer
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
