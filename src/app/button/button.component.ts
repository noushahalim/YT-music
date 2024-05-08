import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-button',
    templateUrl:'./button.component.html'
})

export class buttonTemplate{
    constructor(private routes:Router) {
        
    }

    @Input()
    title:string='default'

    @Input()
    style:string='w-auto border border-white rounded hover:bg-white'

    @Input()
    icon:string=''

    buttonClicked(){
        this.routes.navigate([this.url])
    }
    @Input()
    url:string='/'
}