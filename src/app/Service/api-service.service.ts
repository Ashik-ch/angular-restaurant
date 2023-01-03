import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  //all list display

  AllList() {
    //function for geting api for list
    return this.http.get('http://localhost:3000/restaurants')
  }

  //for specificid  item
  ViewItem(RestId: any) {
    return this.http.get('http://localhost:3000/restaurants/' + RestId)

  }


}
