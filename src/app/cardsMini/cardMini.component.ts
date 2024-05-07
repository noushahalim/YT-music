import { Component, Input } from "@angular/core";

@Component({
    selector:'app-cardMini',
    templateUrl:'./cardMini.component.html'
})

export class cardMiniComponent{
    @Input()
    image:string='../../assets/images/songs/image084.jpg'
    @Input()
    songName:string='sample'
    @Input()
    songDesc:string='sample desc for song'
}