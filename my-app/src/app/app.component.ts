import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  members: Array<any>;

  constructor(){
    this.members = [];
    
  }

  addMember(form: NgForm){
    this.members.push(form.value);
  }
}
