import { Component } from "@angular/core";

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html'
})

export class cardComponent{
    image:string='../../assets/images/songs/f9LWkwp1n7VqMkRjhj8YitB034LjcN2C-AGa3n6HzjA7knzQnzU412svXTkd39mRRcZMxCjr0PtDjzU4=w512-h287-l90-rj'
    songName:string='sample title'
    songDesc:string='sample desc for song'
}