import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
    selector:'app-button',
    templateUrl:'./button.component.html'
})

export class buttonTemplate{
    constructor(private routes:Router, private userService:UserService) {
        
    }

    @Input()
    title:string='default'

    @Input()
    style:string='w-auto border border-white rounded hover:bg-white'

    @Input()
    icon:string=''

    buttonClicked(){
        if(this.url=='/logout'){
            this.userService.userLogout()
        }else{
            this.routes.navigate([this.url])
        }
    }
    @Input()
    url:string='/'
}