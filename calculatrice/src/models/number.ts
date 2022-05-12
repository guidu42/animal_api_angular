import {MyElement} from "./element";

export class Number extends MyElement{

  getResult(): string{
    return this._label;
  }

  constructor() {
    super();
    this._label = '';
  }

  calcResult(): number {
    return parseFloat(this._label);
  }
}
