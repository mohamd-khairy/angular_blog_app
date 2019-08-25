import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  nave= {};
  activeTabe="home";

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.nave=this.getnav();
  }

  getnav(){
    return this.config.getConfig().nav;
  }

  setActiveTab(tabName:string){
    this.activeTabe = tabName;
  }
}
