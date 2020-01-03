import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  constructor() {

    this.user = new User();
    this.user.name = "Raaj Pradeep";
    this.user.designation = "Senior Consultant";
    this.user.address = "11700 Plaza America Drive, Reston , VA 20190";
    this.user.phone = ['678-296-2207','678-538-7692'];

  }
  
}
