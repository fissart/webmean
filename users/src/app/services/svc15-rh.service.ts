  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http'
  import { environment } from "../../environments/environment";

  @Injectable({
    providedIn: 'root'
  })

export class Svc15RHService {

    constructor(private http: HttpClient) { }

    save(user:string ) {
        const fd = new FormData();
        fd.append('title', "Título");
        fd.append('description', "Breve  descripción");
        fd.append('user', user);
        return this.http.post(`${environment.apiURL}/api/RH`, fd );
      }

    getupdate(user:any) {
        console.log(user)
        return this.http.get<any>(`${environment.apiURL}/api/RH/${user}`);
      }

    update(id: string, title:string, description:string, archivo: File) {
        const fd = new FormData();
        fd.append('title', title);
        fd.append('description', description);
        fd.append('image', archivo);
        return this.http.put(`${environment.apiURL}/api/RH/${id}`, fd, { reportProgress: true, observe: "events" });
      }

    gets() {
        return this.http.get<any>(`${environment.apiURL}/api/RH`);
      }

    remove(id: string ) { 
        return this.http.delete(`${environment.apiURL}/api/RH/${id}`);
      }
  }
