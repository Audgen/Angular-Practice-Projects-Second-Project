import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
 
  constructor() { 

    this.user = {
      name: 'Foo bar',
      title: 'Software Developer',
      address: '1234 N Main St, City, State, Zip',
      phone: ['234-098-7368','652-098-2651','123-456-7890']
      };
  }

  ngOnInit() {
  }

}
