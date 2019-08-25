import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts= {};
  blog= {};
  pageSize = 2;
  allItems: any[];
  pages: any[];
  pager: any ={};

  constructor(private config: ConfigService , private pagerService: PagerService) { }

  ngOnInit() {
    this.blog=this.getblog();
    this.posts=this.getpost();
    this.allItems=this.getpost();
    this.setPage(1);

  }

  getblog(){
    return this.config.getConfig().blog;
  }

  getpost(){
    return this.config.getConfig().blog.post;
  }

  setPage(pageNumber: number){
    this.pager = this.pagerService.getPager(this.allItems.length ,pageNumber ,this.pageSize);
    console.log(this.pager);

    this.pages = this.allItems.slice(this.pager.startIndex , this.pager.endIndex + 1);
  }

}
