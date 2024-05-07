import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'app-scroll',
    templateUrl:'./scroll.component.html'
})

export class scrollComponent implements OnInit{
    @Input()
    secTitle:string='sample sec title'
    @Input()
    mainTitle:string='sample main title'
    @Input()
    buttonTitle:string='Play all'
    @Input()
    scrollClass:string=''
    addClass:string='ml-4'
    ngOnInit(){
        if(this.buttonTitle==''){
            this.addClass='ml-24'
        }
    }
}