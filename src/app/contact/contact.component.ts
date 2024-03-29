import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../services/contact.service";
import {User} from "../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mailCheck: boolean = true;
  public userForm!: FormGroup;


  public constructor(private sc: ContactService, private formBuilder: FormBuilder, private router: Router) {


  }

  public ngOnInit(): void {
    this.initForm();
  }


  private initForm() {
    this.userForm = this.formBuilder.group({
      _firstName: ['', Validators.required],
      _lastName: ['', Validators.required],
      _age: ['', Validators.compose([Validators.pattern("\\d+"), Validators.required])],
      _commentaire: ['', Validators.required],
      _email: ['', Validators.compose([Validators.email, Validators.required])]
    });
  }

  public onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['_firstName'],
      formValue['_lastName'],
      formValue['_age'],
      formValue['_commentaire'],
      formValue['_email'] ? formValue['_email'] : ""
    );
    this.sc.setUser(newUser);
    alert("Le formulaire est valide sorcier bienvenue à Poudlard!");
    this.router.navigate(['/accueil']);
  }

  public disabledMail() {
    this.mailCheck = !this.mailCheck;

    if (this.mailCheck) {
      this.userForm.controls["_email"].setValidators(Validators.compose([Validators.email, Validators.required]))
    } else {
      this.userForm.controls["_email"].clearValidators();
    }
    this.userForm.controls["_email"].updateValueAndValidity();
  }
}
