import { Component, OnInit } from '@angular/core';
import {Calcul} from "../../models/calcul";
import {MyElement} from "../../models/element";
import {Number} from "../../models/number";
import {DoubleElement} from "../../models/doubleElement";
import {Operator} from "../../models/operator";

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent{
  newElement: boolean = true;
  operatordone: boolean = false;
  leftElement: Number = new Number();
  fullElement!: DoubleElement;
  showResult: boolean = false;

  returnElement(): Number|DoubleElement{
    if(!this.newElement){
      return this.fullElement;
    }else{
      return this.leftElement;
    }
  }

  numberClicked(x: number): void{
    if(this.newElement){
      this.leftElement.label += x.toString();
    }else if(!this.newElement){
      this.fullElement.rightElement.label += x.toString();
      this.operatordone = !this.operatordone;
    }
    this.showResult = false;
  }

  operationClicked(ope: string): void{
    if(this.newElement && this.leftElement.label == ''){
      this.leftElement.label = '-';
    }else if(this.newElement){
      this.newElement = !this.newElement;
      this.fullElement = new DoubleElement();
      this.fullElement.leftElement = this.leftElement;
      this.fullElement.operator = new Operator(ope);
      this.fullElement.rightElement = new Number();
      this.fullElement.rightElement.label = '';
    }else if(!this.operatordone){
      this.fullElement.operator = new Operator(ope);
    }else{
      this.fullElement.leftElement.label = this.fullElement.calcResult().toString();
      this.fullElement.operator = new Operator(ope);
      this.fullElement.rightElement = new Number();
      this.fullElement.rightElement.label = '';
      this.operatordone = !this.operatordone;
    }

    this.showResult = false;
  }

  clear() {
    this.leftElement.label = '';
    this.newElement = true;
    this.showResult = false;
  }
}
