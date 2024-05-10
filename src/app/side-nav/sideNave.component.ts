import { Component, DoCheck } from "@angular/core";

@Component({
    selector:'app-sideNave',
    templateUrl:'./sideNave.component.html'
})

export class sideNaveComponent implements DoCheck{
    user:any

    ngDoCheck() {
        this.user=localStorage.getItem('user')
      }
    
}