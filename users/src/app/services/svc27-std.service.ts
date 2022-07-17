
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http'
  import { environment } from "../../environments/environment";

  @Injectable({
  providedIn: 'root'
  })

export class Svc27STDService {

  constructor(private http: HttpClient) { }
  URI = `${environment.apiURL}/api/STD`;

  save(user:string ) {
  const fd = new FormData();
  fd.append('title', "Título");
  fd.append('description', "Breve  descripción");
  fd.append('user', user);
  return this.http.post(`${this.URI}`, fd );
  }

  getupdate(user:any) {
  console.log(user)
  return this.http.get<any>(`${this.URI}/${user}`);
  }

  update(id: string, title:string, description:string, archivo: File) {
  const fd = new FormData();
  fd.append('title', title);
  fd.append('description', description);
  fd.append('image', archivo);
  return this.http.put(`${this.URI}/${id}`, fd, { reportProgress: true, observe: "events" });
  }

  gets() {
  return this.http.get<any>(`${this.URI}`);
  }
  getstd(idcurso:string) {
  return this.http.get<any>(`${environment.apiURL}/api/users/ControllerGetusers/${idcurso}`);
  }
  remove(id: string ) {
  return this.http.delete(`${this.URI}/${id}`);
  }
  }
