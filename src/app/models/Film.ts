export class Film {
  private BASE_PATH = "assets/images/";

  constructor(title: string, img: string) {
    this._title = title;
    this._img = this.BASE_PATH + img;
    this._isExpand = false;
  }

  private _isExpand;

  get isExpand() {
    return this._isExpand;
  }

  set isExpand(value) {
    this._isExpand = value;
  }

  private _img: string;

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = this.BASE_PATH + value;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
