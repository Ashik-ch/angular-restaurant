import { Component, OnInit } from '@angular/core';
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBurger = faBurger
  constructor(private Serv: ApiServiceService) { }
  ngOnInit(): void {

  }

  searchbar(event: any) {
    console.log("val:", event.target.value);
    let searchterm = event.target.value
    this.Serv.search.next(searchterm)
    console.log("vales:", event.target.value);
  }

}
