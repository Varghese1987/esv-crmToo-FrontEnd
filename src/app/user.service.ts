import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userLogin(loginDetails):Observable<any>{
    return this.http.post(`${environment.apiUrl}/login`,loginDetails)
  }

  addUser(userDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/addUser`,userDetail);
  }

  editUser(userId,userDetail):Observable<any>{
    return this.http.put(`${environment.apiUrl}/user/${userId}`,userDetail,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  deleteUser(userId):Observable<any>{
    return this.http.delete(`${environment.apiUrl}/user/${userId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  getUser():Observable<any>{
    return this.http.get(`${environment.apiUrl}/userList`,{
      headers:{authorization:localStorage.getItem('authToken')}
    }).pipe(
      catchError(err=>{
        alert(err.error.message);
        return throwError(err);
      })
    )
  }

  sendmail(userDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/check-user`,userDetail)
  }

  updatepwd(pwdDetail,string):Observable<any>{
    return this.http.put(`${environment.apiUrl}/reset-password/${string}`,pwdDetail)
  }

  getUserById(userId):Observable<any>{
    return this.http.get(`${environment.apiUrl}/user/${userId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    })
  }

}
