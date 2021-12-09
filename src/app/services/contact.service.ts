import {Injectable} from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private user: User | undefined;

  constructor() {
  }

  setUser(user: User) {
    this.user = user;

  }

  getUser() {
    return this.user;
  }
}
