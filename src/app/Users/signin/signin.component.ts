import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserAuth } from '../userauth.model';
import { IRole } from '../role.model';

@Component({
  selector: 'race-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userSignRequest: IUserAuth = {
    id: 0,
    user_name: '',
    password: '',
    user_type: 'Admin',
    event_Access: false,
    eventDetail_Access: false
  };

  userRoleRequest: IRole = {
    event_access: false,
    eventdetail_access: false,
    event_and_eventdetail_access: false
  }  

  signedObj: IUserAuth = {
    id: 0,
    user_name: '',
    password: '',
    user_type: 'Admin',
    event_Access: false,
    eventDetail_Access: false
  };
    
  
  constructor(public userService: UserService, private router: Router) { }
      
  ngOnInit(): void {

  }

  signIn() {
    //console.log(this.userSignRequest);
    this.userService.getLogin(this.userSignRequest)
    .subscribe({
      next: (_event) => {
        if(_event.event_Access === true && _event.eventDetail_Access === true)
        {
          //show event and event detail menu item
          this.userRoleRequest.event_and_eventdetail_access = true;
          this.userRoleRequest.event_access = false;
          this.userRoleRequest.eventdetail_access = false;
          console.log(this.userRoleRequest); 
          //this.router.navigate(['events']);

        } else if (_event.event_Access === true && _event.eventDetail_Access === false)
        {
          //show only events menu item    
          this.userRoleRequest.event_access = true;      
          this.userRoleRequest.event_and_eventdetail_access = false;
          this.userRoleRequest.eventdetail_access = false;
          console.log(this.userRoleRequest);
          //this.router.navigate(['events']);

        } else if (_event.event_Access === false && _event.eventDetail_Access === true)
        {
          //show only event details menu item.
          this.userRoleRequest.eventdetail_access = true;
          this.userRoleRequest.event_access = false;
          this.userRoleRequest.event_and_eventdetail_access = false;
          console.log(this.userRoleRequest);
          //this.router.navigate(['eventDetails']);
        }                      
        console.log(this.userRoleRequest);
            
        //manually test the menu function by hard coding the properties to see if the concept works. It doesn't work!
        /*this.userRoleRequest.event_and_eventdetail_access = true;
        this.userRoleRequest.event_access = false;
        this.userRoleRequest.eventdetail_access = false;*/
        this.userService.setMenuItems(this.userRoleRequest);
      }
    });
  }
}
