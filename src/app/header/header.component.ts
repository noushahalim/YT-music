import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Import the CSS file here
})
export class headerComponent implements OnInit {

  newClass=''
  newClass2='border-r-2 border-[#292929]'
  newClass3='bg-[#ffffff80]'

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const scrollY = window.scrollY;
    if(scrollY > 60){
        this.newClass='bg-black border-b border-[#292929]'
        this.newClass2=''
        this.newClass3='bg-[#292929]'
    }
    else{
        this.newClass='bg-none'
        this.newClass2='border-r-2 border-[#292929]'
        this.newClass3='bg-[#ffffff80]'
    }
    
  }
}
