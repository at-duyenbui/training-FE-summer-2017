import { Component } from '@angular/core';

var $main = document.getElementById('js-main');

@Component({
  selector: 'list-name',
  templateUrl: './listName.component.html'
})
export class ListName {
  usernames: Array<string>;
  constructor(){
    this.usernames = [];
  }
}