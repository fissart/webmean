import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Www } from '../interfaces/Www'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URI = environment.apiURL + "/api/users";
  URI_ = environment.apiURL + "/api/photos";

  constructor(
    private http: HttpClient
  ) { }

  //obtener usuario con opiniones
  getUser() {
  //console.log(localStorage.getItem('id'))
    return this.http.get<Www[]>(`${this.URI}/Controller/${localStorage.getItem('id')}`);
  }

  getonly() {
    return this.http.get<Www[]>(`${this.URI}/Controller`);
  }

  get() {
    return this.http.get<Www[]>(`${this.URI}/ControllerAll/${localStorage.getItem('id')}`);
  }

  registro(name: string, email: string, password: string, photo: File) {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('image', photo);
    return this.http.post(`${this.URI}/Controller`, fd);// response:true
  }


  sign(email: string, password: string) {
    return this.http.get<any>(`${this.URI}/Controllersign/${email}/${password}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/Controller/${id}`);
  }

  updatePhoto(id: string, title: string, description: string, password: string, rol: string, photo: File) {
    const fd = new FormData();
    fd.append('name', title);
    fd.append('email', description);
    fd.append('password', password);
    fd.append('rol', rol);
    fd.append('image', photo);
    return this.http.put(`${this.URI}/Controller/${id}`, fd, { reportProgress: true, observe: "events" });
    //    return this.http.put(`${this.URI}/${id}`, { 'name': title, 'email': description, 'password':password });
  }
//URI_
  getOneUser(id: string) {
    return this.http.get<Www>(`${this.URI}/Controller/${id}`);
  }
  createOpinion(user: string, imageid: string, value: string) {
    return this.http.post<any>(this.URI_ + '/opinion', { user, imageid, value });
  }
  deleteOpinion(user: string, imageid: string) {
    return this.http.post<any>(this.URI_ + '/opinion/errase', { user, imageid });
  }

}
