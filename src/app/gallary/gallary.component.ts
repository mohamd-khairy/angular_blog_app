import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  gallary={};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.gallary=this.getGallary();
  }

  getGallary(){
    return this.config.getConfig().gallary;
  }
}
