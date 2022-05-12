export class Case{
  private _positionX: number;
  private _positionY: number;
  private _team: string;

  constructor(x: number, y: number) {
    this._positionX = x;
    this._positionY = y;
    this._team = '';
  }

  get positionX(): number{
    return this._positionX;
  }
  get positionY(): number{
    return this._positionY;
  }
  get team(): string{
    return this._team;
  }
  set team(x: string) {
    this._team = x;
  }
}
