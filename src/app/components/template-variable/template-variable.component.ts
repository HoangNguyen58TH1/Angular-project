import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
})
export class TemplateVariableComponent {
  @ViewChild('itemForm', { static: false }) form!: NgForm;
  get submitMessage() { return this._submitMessage; }
  private _submitMessage = '';

  onSubmit(form: NgForm) {
    this._submitMessage = 'Submitted. Form value is ' + JSON.stringify(form.value);
  }

  callPhone(phone: string) {
    console.warn(`This is your ${phone}`)
    console.log(`This is your ${phone}`)
  }
}
