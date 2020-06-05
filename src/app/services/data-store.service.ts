import { Injectable } from '@angular/core';

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
      const user = users.filter((userData: any) => userData.id === id);
      return user;
    }

    return undefined;
  }
}
