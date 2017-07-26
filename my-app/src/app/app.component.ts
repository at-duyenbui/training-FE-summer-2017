import { Component, ViewChild } from '@angular/core';
import { ListName } from './listName.component'
import { InputName } from './inputName.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  @ViewChild(ListName) listN: any;

  @ViewChild(InputName) username: any;

  ngOnInit(){
    this.username.addName = () =>{
      this.listN.usernames.push(this.username.name);
    }
  }
}
