import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICTAKProject';
  constructor(private fb:FormBuilder){}
  submit=false
  registrationForm = this.fb.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
  })
  get f(){
    return this.registrationForm.controls;
  }
  onsubmit(){
    this.submit=true
    console.log('clicked')
    console.log('f', this.f)
  }
}
