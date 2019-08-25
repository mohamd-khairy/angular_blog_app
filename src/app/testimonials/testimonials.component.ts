import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testmonial= {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testmonial=this.getTestmonial();
  }

  getTestmonial(){
    return this.config.getConfig().testmonial;
  }

}
