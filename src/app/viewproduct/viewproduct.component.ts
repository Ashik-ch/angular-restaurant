import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  RestList: any
  RestId: any
  RestItem: any
  constructor(private ActRoute: ActivatedRoute, private serv: ApiServiceService) {
  }
  ngOnInit(): void {
    // activateRoute for specific item display
    this.ActRoute.params
      .subscribe((data) => {
        this.RestId = data['id']
        console.log(this.RestId);
      })


    this.serv.ViewItem(this.RestId)
      .subscribe((result) => {
        this.RestItem = result
        console.log(this.RestItem);

      })

  }







}
