import { Component } from '@angular/core';
import {Board} from "../../models/board";

@Component({
  selector: 'app-morpions',
  templateUrl: './morpions.component.html',
  styleUrls: ['./morpions.component.scss']
})
export class MorpionsComponent{

  board: Board = new Board();
  start: boolean = true;

  nouvellePartie(){
    this.board = new Board();
    this.start = true;
  }
}
