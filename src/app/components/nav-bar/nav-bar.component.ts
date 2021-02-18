import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

import { faCoffee, faBars, faSearch, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('menuApp',[
      state('open', style({
        height:'200px',
        opacity:1
      })),
      state('closed', style({
        height: '0px',
        opacity:0.5
      })),
      transition('*=> closed',[
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.4s')
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  faCoffee = faCoffee;
  iconFaBars = faBars;
  faSearch = faSearch;
  faUser = faUser;
  iconFaTimes = faTimes;
  

  isShown = false;
  
  constructor() { }

  ngOnInit(): void { }

  menu(){
    this.isShown = !this.isShown
  }
}
