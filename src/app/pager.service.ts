import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItems: number , currentPage: number= 1 , pageSize: number = 10){

    let totalPages = Math.ceil(totalItems / pageSize);

    if(currentPage < 1){
      currentPage = 1;
    } else if( currentPage > totalPages){
      currentPage = totalPages;
    }

    let startPage: number;
    let EndPage: number;

    if(totalPages <= 10){
      startPage =1;
      EndPage = totalPages;
    }else{
      if( currentPage <= 6){
          startPage= 1;
          EndPage= 10;
      }else if( currentPage + 4 >= totalPages){
        startPage = totalPages - 9;
        EndPage = totalPages;
      }else{
        startPage = currentPage - 5;
        EndPage = currentPage + 4; 
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
  
    let pages = Array.from(Array((EndPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      totalItems : totalItems,
      currentPage : currentPage,
      pageSize : pageSize,
      totalPages : totalPages,
      startPage : startPage,
      EndPage : EndPage,
      startIndex : startIndex,
      endIndex : endIndex,
      pages : pages

    }
  }
}
