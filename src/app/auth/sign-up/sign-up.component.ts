import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signUpModel } from 'src/app/model/signUp';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  signUpform!:FormGroup
  constructor(private userService: UserService, private route: Router) { }
  // userService!:UserService
  // route!:Router
  errMsg:string=''


  ngOnInit() {
    this.signUpform=new FormGroup({
      fullName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,Validators.required),
      confirmPassword: new FormControl(null,Validators.required)
    })
  }


  onFormSubmitted(){
    const datas:signUpModel =this.signUpform.value as signUpModel
    this.userService.userSignup(datas).subscribe(
      (response)=>{
        this.route.navigate(['/login'])
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
