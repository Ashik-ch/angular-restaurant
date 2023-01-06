import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-update-rest',
  templateUrl: './update-rest.component.html',
  styleUrls: ['./update-rest.component.css']
})
export class UpdateRestComponent implements OnInit {



  RestBody: any

  reviews: any = []

  RestId: any

  constructor(private ActRoute: ActivatedRoute, private serv: ApiServiceService, private rout: Router) { }

  ngOnInit(): void {
    // get rest id
    this.ActRoute.params
      .subscribe((data) => {
        this.RestId = data['id']
        console.log("restId", this.RestId);
      })

    // get rest details
    this.serv.ViewItem(this.RestId)
      .subscribe((result) => {
        this.RestBody = result
        console.log("restBody", this.RestBody);



      })

  }

  UpdateItem(updateForm: any) {

    let upDatedDb = {
      id: parseInt(updateForm.value.id),
      name: updateForm.value.name,
      neighborhood: updateForm.value.neighborhood,
      photograph1: updateForm.value.photograph,
      description: updateForm.value.description,
      address: updateForm.value.address,
      latlng: {
        lat: updateForm.value.lat,
        long: updateForm.value.long
      },
      operating_hours: {
        Monday: updateForm.value.monday,
        Tuesday: updateForm.value.tuesday,
        Wednesday: updateForm.value.wednesday,
        Thursday: updateForm.value.thursday,
        Friday: updateForm.value.friday,
        Saturday: updateForm.value.saturday,
        Sunday: updateForm.value.sunday
      },
      review: [
        {
          name: updateForm.value.rname,
          date: updateForm.value.rdate,
          comments: updateForm.value.rcomments,
          rating: updateForm.value.rrating
        }]


    }

    this.serv.UpdateRest(this.RestId, upDatedDb,)
      .subscribe(() => {
        alert("Updated Successfully")
        this.rout.navigateByUrl('')
      })

    console.log("DB: ", upDatedDb);
  }
}