import {User} from './User';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("Prenom", "Nom", 1, "je suis gentil")).toBeTruthy();
  });
});
