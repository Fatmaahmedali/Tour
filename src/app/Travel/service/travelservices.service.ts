import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelservicesService {
  private baseUrl = 'https://tours-ac8a5-default-rtdb.firebaseio.com/cairo.json';
  constructor(private http: HttpClient) { }
getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  }
  getProductAll(id: any): Observable<any> {
    const url = `https://tours-ac8a5-default-rtdb.firebaseio.com/all/${id}.json`;
    return this.http.get(url);
  }
  getallgroup(id: any): Observable<any> {
    const url = `https://tours-ac8a5-default-rtdb.firebaseio.com/Groups/${id}.json`;
    console.log(`Fetching group data for ID: ${id} from URL: ${url}`);
    return this.http.get(url);
}
Getgroup(){
  return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/Groups.json')
}
getpackage(){
  return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/package.json')
}
}
