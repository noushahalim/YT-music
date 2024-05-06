import { Component, Input } from "@angular/core";

@Component({
    selector:'app-button',
    templateUrl:'./button.component.html'
})

export class buttonTemplate{
    @Input()
    title:string='default'

    @Input()
    style:string='w-auto border border-white rounded hover:bg-white'

    @Input()
    icon:string=''
}