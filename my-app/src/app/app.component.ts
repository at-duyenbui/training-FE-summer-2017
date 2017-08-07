import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  members: Array<any>;

  memberForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.members = [];
  }

  ngOnInit(){
    this.memberForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        avatar: '',
        name: ['', <any>Validators.required],
        birthday: ''
      }),
      company: this.formBuilder.group({
        joined: '',
        team: ['', <any>Validators.required],
        skill: ''
      }),
    })
  }

  addMember(form: any){
    console.log(form);
    this.members.push(form);
  }

  ngDoCheck(){
    const formValueChanges = this.memberForm.valueChanges;

    formValueChanges.subscribe(
      changes => {
        let formGroup = this.memberForm.controls.company as FormGroup;
        let team = formGroup.controls.team.value.toString().toLowerCase();
        let skill = formGroup.controls.skill.value.toString().toLowerCase();

        if (this.checkContain(team, skill) == false) {
          formGroup.controls.skill.setErrors({"errors": true});
        }
      });
  }

  checkContain(team: string, skill: string): boolean{
    if (team == 'fe') {
      return skill.includes('js');
    } else {
      return skill.includes(team);
    }
  }
}
