export class User {
  public constructor(
    public _firstName: string,
    public _lastName: string,
    public _age: number,
    public _commentaire: string,
    public _email?: string,
  ) {
  }


  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public get commentaire(): string {
    return this._commentaire;
  }

  public set commentaire(value: string) {
    this._commentaire = value;
  }

  public get email(): string {
    return <string>this._email;
  }

  public set email(value: string) {
    this._email = value;
  }
}
