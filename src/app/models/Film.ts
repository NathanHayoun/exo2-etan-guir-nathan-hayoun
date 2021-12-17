export class Film {
  private BASE_PATH = "assets/images/";
  private _isExpand;
  private _img: string;
  private _title: string;

 public constructor(title: string, img: string) {
    this._title = title;
    this._img = this.BASE_PATH + img;
    this._isExpand = false;
  }

  public get isExpand() {
    return this._isExpand;
  }

  public set isExpand(value) {
    this._isExpand = value;
  }


  public get img(): string {
    return this._img;
  }

  public set img(value: string) {
    this._img = this.BASE_PATH + value;
  }


  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }
}
