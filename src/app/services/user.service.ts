import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { signUpModel } from "../model/signUp";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient , private router:Router){}
    signupApi ='http://localhost:3000/signup'
    userSignup(data:signUpModel):Observable<any>{
        return this.http.post(this.signupApi,data)
    }
    loginApi = 'http://localhost:3000/login'
    useLogin(data:any):Observable<any>{
        return this.http.post(this.loginApi,data)
    }
    userLogout(){
        localStorage.clear()
        this.router.navigate([''])
    }
}