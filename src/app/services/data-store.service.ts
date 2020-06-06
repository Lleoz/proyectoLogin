import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const usersKey = 'users';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
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

  updateUser(userData: User) {
    const users: User[] = JSON.parse(localStorage.getItem(usersKey));
    if (users) {
      users.find((u, i) => {
        const isUser: boolean = u.id === userData.id;
        if (isUser) {
          users[i] = userData;
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
}
