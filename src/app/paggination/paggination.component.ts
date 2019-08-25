import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paggination',
  templateUrl: './paggination.component.html',
  styleUrls: ['./paggination.component.css']
})
export class PagginationComponent implements OnInit {

  @Input() pager;
  @Output() setPage : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  setCurrentPage(pageNumber : number){
    this.setPage.emit(pageNumber);
  }

}
