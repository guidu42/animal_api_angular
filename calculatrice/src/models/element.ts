export abstract class MyElement {
  protected _label: string = '';

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  abstract calcResult(): number;

  abstract getResult(): void;

}
