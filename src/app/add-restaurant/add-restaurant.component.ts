import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {


  id: any
  name: any
  neighborhood: any
  address: any
  des: any
  description: any
  photograph: any
  long: any
  lat: any
  Sunday: any
  Monday: any
  Tuesday: any
  Wednesday: any
  Thursday: any
  Friday: any
  Saturday: any
  rname: any
  rdate: any
  rcomments: any
  rrating: any

  reviews: any = []

  constructor(private serv: ApiServiceService, private rout: Router) {

  }
  ngOnInit(): void {

  }

  AddItem() {
    let dbitem = {
      id: parseInt(this.id),
      name: this.name,
      neighborhood: this.neighborhood,
      photograph1: this.photograph,
      description: this.description,
      address: this.address,
      latlng: {
        lat: this.lat,
        long: this.long
      },
      operating_hours: {
        Monday: this.Monday,
        Tuesday: this.Tuesday,
        Wednesday: this.Wednesday,
        Thursday: this.Thursday,
        Friday: this.Friday,
        Saturday: this.Saturday,
        Sunday: this.Sunday
      },
      review: [
        {
          name: this.rname,
          date: this.rdate,
          comments: this.rcomments,
          rating: this.rrating
        }

      ]
    }

    console.log("DB: ", dbitem);

    this.serv.AddRest(dbitem)
      .subscribe(() => {
        alert("Added succesfull")
        this.rout.navigateByUrl('')
      })


  }
}
