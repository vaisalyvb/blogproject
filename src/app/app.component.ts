import { Component ,OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ICTAKProject';
  constructor(private fb:FormBuilder, private userService:UserService){}
  submit=false
  ngOnInit(): void {
  }
  registrationForm = this.fb.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    password:['',[Validators.required,Validators.minLength(8)]],

    confirmpassword:['',[Validators.required]]
    
  },
  {
    validators: this.MustMatch('password','confirmpassword')
  })
  get f(){
    return this.registrationForm.controls;
  }
  MustMatch(controlName: string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors&& !matchingControl.errors.MustMatch){
      return
      }
      if (control.value!== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }

    }

  }
  onsubmit(){
    this.userService.newUser(this.registrationForm.value)
    console.log("called")
    alert("Registered Successfully");
    
    }
  }
