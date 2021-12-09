import {Film} from './Film';

describe('Film', () => {
  it('should create an instance', () => {
    expect(new Film("title", "images.png")).toBeTruthy();
  });
});
