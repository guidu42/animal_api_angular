import { Component } from '@angular/core';
import {AnimalService} from "../angular-module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animal-api';
  constructor() {
  }
}
