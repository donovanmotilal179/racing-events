import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserAuth } from '../Users/userauth.model';
import { IRole } from '../Users/role.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseApiUrl: string = "https://localhost:7179";
    menuItems: IRole | undefined;
  
    constructor(private http: HttpClient) { }
  
    getAllUsers(): Observable<IUserAuth[]> {
      return this.http.get<IUserAuth[]>(this.baseApiUrl + '/api/user/getUsers');
    }
  
    getUser(id: number): Observable<IUserAuth> {
      return this.http.get<IUserAuth>(this.baseApiUrl + '/api/user/getUserById' + id);
    }
  
    getLogin(addUserRequest: IUserAuth): Observable<IUserAuth> {      
      return this.http.post<IUserAuth>(this.baseApiUrl + '/api/user/userLogin',  addUserRequest);
    }

    addUser(addUserRequest: IUserAuth): Observable<IUserAuth> {
      return this.http.post<IUserAuth>(this.baseApiUrl + '/api/user/createUser', addUserRequest);
    }
  
    editUser(id: number, addUserRequest: IUserAuth): Observable<IUserAuth> {
      return this.http.put<IUserAuth>(this.baseApiUrl + '/api/user/editUser' + id, addUserRequest);
    }
  
    deleteUser(id: number): Observable<IUserAuth> {
      return this.http.delete<IUserAuth>(this.baseApiUrl + '/api/user/deleteUser' + id);
    }

    setMenuItems(data: IRole) {
      this.menuItems = data;
    }

    getMenuItems() {
      return this.menuItems;
    }
}
