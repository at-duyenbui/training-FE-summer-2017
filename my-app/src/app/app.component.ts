import { Component, Input } from '@angular/core';
import { TrainersService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  index: number;

  onChange(i: number) {
    this.index = i;
  }
}
