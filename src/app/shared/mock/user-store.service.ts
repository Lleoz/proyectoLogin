import { Injectable } from '@angular/core';
import { UserDto } from '../../core/models/user-dto.model';

const usersKey = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  constructor() { }

  addUser(user: any) {
    const users = JSON.parse(localStorage.getItem(usersKey));
    if (users) {
      const newArray = [user, ...users];
      localStorage.setItem(usersKey, JSON.stringify(newArray));
    } else {
      const newArray = [user];
      localStorage.setItem(usersKey, JSON.stringify(newArray));
    }
  }

  updateUser(userData: UserDto) {
    const users: UserDto[] = JSON.parse(localStorage.getItem(usersKey));
    if (users) {
      users.find((u, i) => {
        const isUser: boolean = u.id === userData.id;
        if (isUser) {
          users[i].name = userData.name;
          users[i].email = userData.email;
          users[i].birthDate = userData.birthDate;
          users[i].phoneNumber = userData.phoneNumber;
          users[i].genre = userData.genre;
        }
        return isUser;
      });

      console.log(users);
      localStorage.setItem(usersKey, JSON.stringify(users));
    }
  }

  getUsers(): any {
    const users = JSON.parse(localStorage.getItem(usersKey));
    if (users) {
      return users;
    }
    return [];
  }

  getUserById(id: string): any {
    const users: [] = JSON.parse(localStorage.getItem(usersKey));

    if (users) {
      const user = users.find((userData: any) => userData.id === id);
      return user;
    }

    return undefined;
  }

  getUserByEmail(email: string): any {
    const users: [] = JSON.parse(localStorage.getItem(usersKey));

    if (users) {
      const user = users.find((userData: any) => userData.email === email);
      return user;
    }

    return undefined;
  }
}
