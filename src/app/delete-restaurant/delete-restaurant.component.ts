import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {
  Restid: any
  delte: any
  constructor(private actRout: ActivatedRoute, private serv: ApiServiceService, private route: Router) {

  }


  ngOnInit(): void {


    this.actRout.params
      .subscribe((data) => {
        this.Restid = data['id']
        console.log(this.Restid);
      })


  }
  confirm() {
    this.serv.DeleteRest(this.Restid)
      .subscribe((result) => {
        this.delte = result
        console.log("delte", this.delte);
        alert("Succusfully deleted")
        this.route.navigateByUrl('')
      })
  }
  // cancel() {
  //   this.route.navigateByUrl('viewproduct')
  // }




}
