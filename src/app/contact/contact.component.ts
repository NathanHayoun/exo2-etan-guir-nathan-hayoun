import { Component, OnInit } from '@angular/core';
import {FormControl, formControlBinding, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mailCheck:boolean = true;
  public profileForm:FormControl;


  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),
  //   email: new FormControl(''),
  //
  // });

  constructor(profileForm: FormControl) {
    this.profileForm = new FormControl()
  }

  ngOnInit(): void {}

  public setDonnee(){

  }


  // public get

}
