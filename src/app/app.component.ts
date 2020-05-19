import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    console.log('Form submited: ', this.form)
    let formData = {...this.form.value}
    console.log('Form data: ', formData)
  }

  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kyiv',
      by: 'Minsk'
    }
    const cityKey = this.form.get('address').get('country').value
    const city = cityMap[cityKey]
    this.form.patchValue({
      address: {city: city}
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control)
  }
}
