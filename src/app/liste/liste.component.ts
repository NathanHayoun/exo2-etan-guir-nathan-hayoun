import {Component, OnInit} from '@angular/core';
import {Film} from "../models/Film";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  public films: Array<Film>;
  private title = ["Harry Potter", "Sword Art Online", "Avengers", "Star Wars", "Passenger"];
  private images = ["harrypotter.jpg", "sao.jpg", "avengers.jpg", "starwars.jpg", "passenger.jpg"];

  constructor() {
    this.films = Array<Film>();
    for (let i = 0; i < this.title.length; i++) {
      this.films.push(new Film(this.title[i], this.images[i]));
    }
  }
}
