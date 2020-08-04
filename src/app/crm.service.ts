import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(private http:HttpClient) { }

  addSr(userId,srDetail,token):Observable<any>{
    return this.http.post(`${environment.apiUrl}/createSr/${userId}`,srDetail,{
      headers:{authorization:token}
    });
  }

  editSr(srId,srDetail):Observable<any>{
    return this.http.put(`${environment.apiUrl}/updateSR/${srId}`,srDetail,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  deleteSr(srId):Observable<any>{
    return this.http.delete(`${environment.apiUrl}/sr/${srId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  getSr():Observable<any>{
    return this.http.get(`${environment.apiUrl}/srList`,{
      headers:{authorization:localStorage.getItem('authToken')}
    }).pipe(
      catchError(err=>{
        alert(err.error.message);
        return throwError(err);
      })
    )
  }

  getSrById(srId):Observable<any>{
    return this.http.get(`${environment.apiUrl}/sr/${srId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    })
  }

  addLead(userId,leadDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/createLead/${userId}`,leadDetail,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  editLead(leadId,leadDetail):Observable<any>{
    return this.http.put(`${environment.apiUrl}/updateLead/${leadId}`,leadDetail,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  deleteLead(leadId):Observable<any>{
    return this.http.delete(`${environment.apiUrl}/Lead/${leadId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  getLead():Observable<any>{
    return this.http.get(`${environment.apiUrl}/leadList`,{
      headers:{authorization:localStorage.getItem('authToken')}
    }).pipe(
      catchError(err=>{
        alert(err.error.message);
        return throwError(err);
      })
    )
  }

  getLeadById(leadId):Observable<any>{
    return this.http.get(`${environment.apiUrl}/lead/${leadId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    })
  }

  addContact(userId,contactDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/createContact/${userId}`,contactDetail,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  editContact(contactId,contactDetail):Observable<any>{
    return this.http.put(`${environment.apiUrl}/updateContact/${contactId}`,contactDetail,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  deleteContact(contactId):Observable<any>{
    return this.http.delete(`${environment.apiUrl}/contact/${contactId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    });
  }

  getContact():Observable<any>{
    return this.http.get(`${environment.apiUrl}/contactList`,{
      headers:{authorization:localStorage.getItem('authToken')}
    }).pipe(
      catchError(err=>{
        alert(err.error.message);
        return throwError(err);
      })
    )
  }

  getContactById(contactId):Observable<any>{
    return this.http.get(`${environment.apiUrl}/contact/${contactId}`,{
      headers:{authorization:localStorage.getItem('authToken')}
    })
  }

  getDashBoardData():Observable<any>{
    return this.http.get(`${environment.apiUrl}/dashboard`,{
      headers:{authorization:localStorage.getItem('authToken')}
    })
  }
}