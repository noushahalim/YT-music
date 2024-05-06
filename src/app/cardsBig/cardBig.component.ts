import { Component, Input } from "@angular/core";

@Component({
    selector:'app-cardBig',
    templateUrl:'./cardBig.component.html'
})

export class cardBigComponent{
    @Input()
    image:string=''
    @Input()
    songName:string='sample'
    @Input()
    songDesc:string='sample desc for song'
}