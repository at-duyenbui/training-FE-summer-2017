import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  members: Array<any>;
  memberForm: any;

  constructor(private formBuilder: FormBuilder){
    this.members = [];
    this.memberForm = this.formBuilder.group({
      personal: new FormGroup({
        avatar: new FormControl(),
        name: new FormControl('', [Validators.required]),
        birthday: new FormControl()
      }),
      company: new FormGroup({
        joined: new FormControl(),
        team: new FormControl('', [Validators.required])
      }),
      skill: new FormControl()
    });
  }

  ngOnInit(){
    this.memberForm.controls.company.controls.team.valueChanges.subscribe(
      changes => {
        this.memberForm.setControl('skill', new FormControl('', [Validators.required, this.checkSkillByTeam]));
      }
      );
  }

  ngOndestroy(){
    this.memberForm.controls.company.controls.team.valueChanges.unsubscribe();
  }

  checkSkillByTeam = (input: FormControl) => {
    let isValid: boolean;
    let team = this.memberForm.controls.company.controls.team.value.toLowerCase();
    console.log(team);
    let skill = input.value.toLowerCase();
    if (team === 'FE') { 
      if(skill.indexOf('js') === -1) {
        isValid = false;
      } else {
        isValid = true;
      }
    } else {
      if(skill.indexOf(team) === -1) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
    return isValid ? null : {skillsInvalid: true};
  }

  addMember(form: any){
    this.members.push(form);
    this.memberForm.reset();
  }

  editMember(member: any){
    this.memberForm.patchValue(member);
  }
}
