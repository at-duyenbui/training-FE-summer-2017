import { Component } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './inputName.component.html'
})
export class InputName {
	name: string;
  constructor(){
    this.name = "";
  }
}