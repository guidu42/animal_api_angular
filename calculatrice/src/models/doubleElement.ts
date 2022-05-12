import {MyElement} from "./element";
import {Operator} from "./operator";

export class DoubleElement extends MyElement {
  private _leftElement!: MyElement;
  private _rightElement!: MyElement;
  private _operator!: Operator;

  get operator(): Operator {
    return this._operator;
  }

  set operator(value: Operator) {
    this._operator = value;
  }

  get leftElement(): MyElement {
    return this._leftElement;
  }

  set leftElement(value: MyElement) {
    this._leftElement = value;
  }

  get rightElement(): MyElement {
    return this._rightElement;
  }

  set rightElement(value: MyElement) {
    this._rightElement = value;
  }

  getResult(): string {
    if(this._operator.label == '^('){
      return `${this._leftElement.label} ${this._operator.label}-${this._rightElement.label})`
    }
    return `${this._leftElement.label} ${this._operator.label} ${this._rightElement.label}`
  }

  calcResult(): number {
    if (this._operator.label == '+') {
      return this._leftElement.calcResult() + this._rightElement.calcResult();
    } else if (this._operator.label == '-') {
      return this._leftElement.calcResult() - this._rightElement.calcResult();
    } else if (this._operator.label == '*') {
      return this._leftElement.calcResult() * this._rightElement.calcResult();
    } else if (this._operator.label == '/') {
      return this._leftElement.calcResult() / this._rightElement.calcResult();
    } else if (this.operator.label == '^'){
      return Math.pow(this._leftElement.calcResult(), this.rightElement.calcResult());
    } else if (this.operator.label == '^('){
      return Math.pow(this._leftElement.calcResult(), 1/this._rightElement.calcResult())
    }
    return 0;
  }
}
