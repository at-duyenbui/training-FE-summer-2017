import { Component, Input } from '@angular/core';

var $main = document.getElementById('js-main');

@Component({
  selector: 'list-name',
  templateUrl: './listName.component.html'
})
export class ListName {
  @Input() usernames: string[];
}