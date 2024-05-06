import { Component, Input } from "@angular/core";

@Component({
    selector:'app-scroll',
    templateUrl:'./scroll.component.html'
})

export class scrollComponent{
    @Input()
    secTitle:string='sample sec title'
    @Input()
    mainTitle:string='sample main title'
    @Input()
    buttonTitle:string='Play all'
}