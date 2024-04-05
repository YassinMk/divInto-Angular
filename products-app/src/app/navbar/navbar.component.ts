import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public  appState: AppStateService) {}
  actions : Array<any> = [
    {title:"Home",route:"home" ,icon:"house"},
    {title:"Products",route:"products", icon:"search"},
    {title:"New Product",route:"newProduct", icon:"bag-plus"}
  ];

  currentActions: any;
  setCurrentAction(action: any){
    this.currentActions = action;
  }
}