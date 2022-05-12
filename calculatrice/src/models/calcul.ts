export class Calcul{

  private _resultat: number;
  private _chaineCalcul: string;
  private _newNumber!: number;
  private _newNumberString!: string;
  private _operation!: string;

  constructor(number: number) {
    this._newNumber = number;
    this._newNumberString = this._newNumber.toString();
    this._resultat = this._newNumber;
    this._chaineCalcul = `${this._newNumber}`;
  }

  get operation(): string {
    return this._operation;
  }

  set operation(value: string) {
    this._operation = value;
  }

  get resultat(): number {
    return this._resultat;
  }

  set resultat(value: number) {
    this._resultat = value;
  }
  get chaineCalcul(): string {
    return this._chaineCalcul;
  }

  set chaineCalcul(value: string) {
    this._chaineCalcul = value;
  }
  get newNumber(): number {
    return this._newNumber;
  }

  set newNumber(value: number) {
    this._newNumberString += value.toString();
    this._newNumber = parseInt(this._newNumberString);
    this._chaineCalcul += value;
  }

  addition(): void{
    this._resultat += this._newNumber;
  }
  soustraction(): void{
    this._resultat -= this._newNumber;
  }

  multiplication(): void{
    this._resultat *= this._newNumber;
  }
  division() {
    this._resultat /= this._newNumber;
  }
}
