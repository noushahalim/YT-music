import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html'
})

export class homeComponent{
    categories:string[]=['Relax','Sleep','Podcasts','Feel good','Sad','Romance','Energize','Party','Commute','Workout','Focus']
    categoryStyle:string='bg-[#80808057] pl-3 pr-3 pt-2 pb-2 ml-3 text-white rounded text-sm hover:bg-[#808080af]'
}