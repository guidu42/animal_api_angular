import {Case} from "./case";

export class Board{
  private _tour: boolean = true;
  private _damier: Array<Case> = [];
  private _winner: string = '';
  private _tabCheckPosition: Array<{x: number, y: number}> = [
    {x: -1,y: -1},
    {x: -1,y: 0},
    {x: -1,y: +1},
    {x: +1,y: -1},
    {x: +1,y: 0},
    {x: +1,y: +1},
    {x: 0, y: -1},
    {x: 0, y: +1}
  ]

  constructor() {
    let index: number = 0;
    for(let ligne = 0; ligne < 3; ligne++){
      for(let col = 0; col < 3; col++){
        this._damier[index] = new Case(ligne, col);
        index++;
      }
    }
  }
  get winner(): string{
    return this._winner;
  }
  get tour(): boolean{
    return this._tour;
  }
  set tour(turn){
    this._tour = turn;
  }
  get damier(): Array<Case>{
    return this._damier;
  }

  newPlay(i: number): void{
    if(this._tour){
      this._damier[i].team = 'X';
    }else {
      this._damier[i].team = 'O';
    }
    this.checkVictory(i);
    this._tour = !this._tour;
  }

  checkVictory(index: number): void{
    let caseClicked = this._damier[index];
    let positionX = caseClicked.positionX;
    let positionY = caseClicked.positionY;

    for(const check of this._tabCheckPosition){
      const checkCase = this._damier.filter( oneCase => oneCase.positionY == positionY+check.y && oneCase.positionX == positionX+check.x && oneCase.team == caseClicked.team);
      if(checkCase.length != 0){
        const checkedCase = checkCase[0];
        const checkCase2 = this._damier.filter(oneCase => ((oneCase.positionY == checkedCase.positionY+check.y && oneCase.positionX == checkedCase.positionX+check.x)
          || (oneCase.positionY == positionY-check.y && oneCase.positionX == positionX-check.x))
          && oneCase.team == checkedCase.team);
        if(checkCase2.length != 0){
          if(this._tour){
            this._winner = 'Joueur1';
          }else{
            this._winner = 'Joueur2';
          }
        }
      }
    }
  }
}
