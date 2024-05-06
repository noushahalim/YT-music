import { Component, Input } from "@angular/core";

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html'
})

export class cardComponent{
    @Input()
    image:string=''
    @Input()
    songName:string='sample'
    @Input()
    songDesc:string='sample desc for song'
}