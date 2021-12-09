export class User {
  constructor(
    public _firstName: string,
    public _lastName: string,
    public _age: number,
    public _commentaire: string,
    public _email?: string,
  ) {
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get commentaire(): string {
    return this._commentaire;
  }

  set commentaire(value: string) {
    this._commentaire = value;
  }

  get email(): string {
    return <string>this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
