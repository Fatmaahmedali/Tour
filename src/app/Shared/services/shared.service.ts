import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http:HttpClient) { }
  getAboutData(){
    return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/About.json')
  }
  postOfData(data: any) {
    return this.http.post('https://tours-ac8a5-default-rtdb.firebaseio.com/Data.json', data);
  }

}
