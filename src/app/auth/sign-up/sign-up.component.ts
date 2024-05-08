import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpform!:FormGroup
  http:HttpClient =inject(HttpClient)

  ngOnInit() {
    this.signUpform=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,Validators.required),
      confirmPassword: new FormControl(null,Validators.required)
    })
  }


  onFormSubmitted(){
    // this.http.post('')
    console.log(this.signUpform.value);
    
  }
}
