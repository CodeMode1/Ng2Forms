import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html'
})
export class TemplateDrivenComponent {
  user = {
    username: '',
    email: '',
    password: '',
    gender: 'male'
  };

  genders: string[] = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm){
    console.log(form);
    console.log(form.value);
  }
}
