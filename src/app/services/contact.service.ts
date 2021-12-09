import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  userUpdate: EventEmitter<User> = new EventEmitter<User>();
  private user: User | undefined;

  constructor() {
  }

  setUser(user: User) {
    this.user = user;
    this.userUpdate.emit(user);
  }

  getUser() {
    return this.user;
  }
}
