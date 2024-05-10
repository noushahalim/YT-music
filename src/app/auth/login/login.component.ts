import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/model/login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  constructor(private userService: UserService, private route: Router) { }
  errMsg:string=''

  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,Validators.required)
    })
  }

  onFormSubmitted(){
    const datas:loginModel =this.loginForm.value as loginModel
    this.userService.useLogin(datas).subscribe(
      (response)=>{
        localStorage.setItem('user','true')
        console.log(localStorage);
        
        this.route.navigate([''])
      },
      (error:any)=>{
        this.errMsg=error.error
        setTimeout(() => {
          this.errMsg=''
        }, 3000);
      }
    )
    
  }
}
