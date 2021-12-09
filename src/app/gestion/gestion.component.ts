import {Component, OnInit} from '@angular/core';
import {ContactService} from "../services/contact.service";
import {User} from "../models/User";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  public lastContact: User | undefined = this.sc.getUser();

  constructor(private sc: ContactService) {
  }

  ngOnInit(): void {
    this.sc.userUpdate.subscribe((user) => {
      this.lastContact = user
    })
  }

}
