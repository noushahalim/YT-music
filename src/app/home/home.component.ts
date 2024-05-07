import { Component, OnInit } from "@angular/core";
import { MusicService } from "../services/music.service";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html'
})

export class homeComponent implements OnInit{

    indiasBiggesthits!:any[]
    RecomentedMusicVideos!:any[]
    InTheZone!:any[]
    qickPicks!:any[]
    Charts!:any[]

    categories:string[]=['Relax','Sleep','Podcasts','Feel good','Sad','Romance','Energize','Party','Commute','Workout','Focus']
    categoryStyle:string='bg-[#80808057] pl-3 pr-3 pt-2 pb-2 ml-3 text-white rounded text-sm hover:bg-[#808080af]'

    constructor (private musicService:MusicService){}

    ngOnInit(){
        this.indiasBiggesthits=this.musicService.indiasBiggesthits
        this.RecomentedMusicVideos=this.musicService.RecomentedMusicVideos
        this.InTheZone=this.musicService.InTheZone
        this.qickPicks=this.musicService.qickPicks
        this.Charts=this.musicService.Charts
    }
}