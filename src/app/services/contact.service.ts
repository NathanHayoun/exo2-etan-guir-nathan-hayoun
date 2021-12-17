import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _userUpdate: EventEmitter<User> = new EventEmitter<User>();
  private user: User | undefined;

  public constructor() {
  }

 public setUser(user: User) {
    this.user = user;
    this._userUpdate.emit(user);
  }

 public getUser() {
    return this.user;
  }

 public get userUpdate(): EventEmitter<User> {
    return this._userUpdate;
  }
}
