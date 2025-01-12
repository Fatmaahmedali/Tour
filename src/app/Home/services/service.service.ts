import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ServiceService {
    constructor(private http: HttpClient) { }
    getAllProducts(){
      return this.http.get ('https://tours-ac8a5-default-rtdb.firebaseio.com/cairo.json')
    }
    getpackage(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/package.json')
    }
    getsnorkeling(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/Snorkeling.json')
    }
    getLuxor(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/Luxor.json')
    }
    getDesert(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/Desert%20.json')
    }
    getPargraph(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/paragraph.json')
    }
    getAllData(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/all.json')
    }
    getparagharph(routeKey?: string){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/Excursions.json')
    }
    getallfamily(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/family.json')
    }
    getallgroup(){
      return this.http.get('https://tours-ac8a5-default-rtdb.firebaseio.com/Groups.json')
    }
};
