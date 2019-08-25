import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  services= {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.services=this.getservices();
  }

  getservices(){
    return this.config.getConfig().services;
  }

}
