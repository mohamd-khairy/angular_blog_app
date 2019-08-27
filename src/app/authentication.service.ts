import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError ,map ,tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl='api/users';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation= 'operation' , result?: T){
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

  signup(data):Observable<User>{
    return this.http.post<User>(this.apiUrl , data).pipe(
      tap((user:User) => {
        localStorage.setItem('currentUser' , JSON.stringify(user));
        console.log(`added user with id=${user.id}`)
      }),
      catchError(this.handleError<User>('signup'))
    );
  }
}
