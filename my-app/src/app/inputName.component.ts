import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './inputName.component.html'
})
export class InputName {
	name: string;
  @Output() addNew: EventEmitter<string> = new EventEmitter<string>();

  addName(){
  	this.addNew.emit(this.name);
  }
}