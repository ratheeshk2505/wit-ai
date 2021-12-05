import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public selected = '';

  constructor() { }

  ngOnInit (): void {
  }

  select (event:any) {
    // console.log(event.target.value);
    // console.log(event.target.selectionStart);
    // console.log(event.target.selectionEnd);
    this.selected = event.target.value.slice(event.target.selectionStart,event.target.selectionEnd)
    console.log(this.selected);

  }

}
