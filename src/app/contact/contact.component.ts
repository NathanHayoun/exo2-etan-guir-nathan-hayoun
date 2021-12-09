import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, FormGroup} from "@angular/forms";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mailCheck: boolean = true;

  userForm: FormGroup | undefined;


  constructor(private sc: ContactService, private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.userForm = this.formBuilder.group({
      _firstName: '',
      _lastName: '',
      _age: '',
      _commentaire: '',
      _email: ''
    });
  }

  public setDonnee() {
  }


  // public get

}
