import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  RestList:any

  constructor(private serv: ApiServiceService) { }
  ngOnInit(): void {


    //api list  is stoerd in result using .subscribe (asycnronus function)
    this.serv.AllList()
      .subscribe((result) => {
        if (result) {
          console.log(result);
          this.RestList=result

        }
      }
      )



  }

}
