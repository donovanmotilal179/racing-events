import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'race-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public userService: UserService) {

  }

  ngOnInit(): void {
    console.log('this is ' + this.userService.getMenuItems());
  }
}
