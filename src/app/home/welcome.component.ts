import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './welcome.component.html',

})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  constructor() { }

  ngOnInit(): void {
  }

}
