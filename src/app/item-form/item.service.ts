import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


import {Iitem} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService{
    private itemUrl='api/items/items.json';
    constructor(private http: HttpClient){}

    getItems(): Observable<Iitem[]>{
        return this.http.get<Iitem[]>(this.itemUrl).pipe(
          tap(data=>console.log('All:'+JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    getItem(id: number): Observable<Iitem | undefined> {
      return this.getItems()
        .pipe(
          map((products: Iitem[]) => products.find(p => p.itemId === id))
        );
    }
    
    private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}