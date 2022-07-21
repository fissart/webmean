import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CurseService {

  URI = environment.apiURL + '/api/sections/Controller';
  URIw = environment.apiURL + '/api/curses/Controller';
  URI2 = environment.apiURL + '/api/users/Controller';
  URI3 = environment.apiURL + '/api/curses/ControllerAll';

  constructor(private http: HttpClient) { }

  //URI = environment.apiURL + '/api/photos'
  createCurse(user: string ) {
    const fd = new FormData();
    fd.append('title', "Título del curso");
    fd.append('description', "Descripción del curso");
    fd.append('image', "photo  del curso");
    fd.append('user', user);
    return this.http.post(this.URIw, fd, {reportProgress:true, observe:"events"});
  }
  createUnity(user: string, curse:string ) {
    const fd = new FormData();
    fd.append('title', "Título de la unidad");
    fd.append('description', "Descripción de la unidad");
    fd.append('image', "Foto de la unidad");
    fd.append('test', "Test de la unidad");
    fd.append('task', "Task de la unidad");
    fd.append('timeex', "3");
    fd.append('time', "2022-12-12");
    fd.append('user', user);
    fd.append('curse', curse);
    return this.http.post(this.URI, fd, {reportProgress:true, observe:"events"});
  }



  getcurseuseronly(id:string) {
          return this.http.get(`${environment.apiURL}/api/integer/Controllerintegeruser/${id}`);
//console.log(id)
  }

getsCurseTeacher(id:string) {
        return this.http.get(`${environment.apiURL}/api/curses/ControllerCurseTeacher/${id}`);
        console.log("Wwwwwwwwwwwwwwwwwwwwwwwwwwwwww");

}

  getPhoto(id: string) {
    return this.http.get<any>(`${this.URIw}/${id}`);
  }

    getPhotosUser(id: string) {
    return this.http.get<any>(`${environment.apiURL}/api/curses/getsControllerUser/${id}`);
  }

getUnity(id: string) {
    return this.http.get<any>(`${this.URI}/${id}`);
  }


  getCurse(id: string) {
    return this.http.get<any>(`${this.URI3}/${id}/${localStorage.getItem('id') || ""}`);
  }


  delete(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }
  deletePhoto(id: string) {
    return this.http.delete(`${this.URIw}/${id}`);
  }
/*
Curse
*/
updatePhoto(id: string, title: string, description: string, photo:File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.put(`${this.URIw}/${id}`, fd, {reportProgress:true, observe:"events"});
//    return this.http.put(`${this.URI}/${id}`, { 'name': title, 'email': description, 'password':password });
  }


updateUnity(id: string, title: string, description: string,  task: string,  test: string,  time: string, timeex: string) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('task', task);
    fd.append('test', test);
    fd.append('time', time);
    fd.append('timeex', timeex);
    return this.http.put(`${this.URI}/${id}`, fd, {reportProgress:true, observe:"events"});
    //fd.append('image', photo);
//    return this.http.put(`${this.URI}/${id}`, { 'name': title, 'email': description, 'password':password });
}


saveinteger(iduser:string,idcurso:string,iduserteach:string){
        console.log(iduser, idcurso, iduserteach )
        return this.http.post<any>(`${environment.apiURL}/api/integer/Controller`, {'curse':idcurso, 'user':iduser, 'userteach':iduserteach});
    }



  deleteinteger(idinteger: string) {
    return this.http.delete(`${environment.apiURL}/api/integer/Controller/${idinteger}`);
  }


  getintegers(id: string){
      return this.http.get(`${environment.apiURL}/api/integer/Controllerintegerscurse/${id}`);
  }
  getintegersaverage(id: string){
      return this.http.get(`${environment.apiURL}/api/integer/Controllerintegersaverage/${id}`);
  }

//URI2 = environment.apiURL + '/api/wwu'
  getPhotouser(iduser: string) {
    return this.http.get<any>(`${this.URI2}/www/${iduser}`);
  }

  newscreate(iduser: string){
          return this.http.post(`${environment.apiURL}/api/news/Controller`, {'user':iduser, "title":"Title new", "description": `Este es un modelo de como puede escribir (formato html y css) en esta área borre todo y escriba<h1 class='bg-info text-success border p-1 rounded'>Titulo</h1>
          <h2 class='bg-info text-light border rounded text-success p-1'>Titulo</h2>
          <h3 class='bg-light border rounded text-success p-1'>Titulo</h3>
        <img class='bg-light p-1 m-auto'
                src="https://thumbs.dreamstime.com/b/elegant-blue-background-swirls-space-your-text-elegant-blue-background-swirls-space-your-text-159291073.jpg"
                width="75%"
              />
        <ul>
        <li><a href="https://drive.google.com/file/u/0/d/0B1Ga40SmVyy-TTRWcXNkRGYxY00/view?resourcekey=0-tXQ867e7G7OY2bMQzshTKQ" target="_blanck">Libro</a></li>
        <li><a href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones en la naturaleza</a></li>
        </ul>

        <hr>

        $$\\begin{Bmatrix} a & b \\\\   c & d\\end{Bmatrix}$$

        $$\\int_1^3=\\lim_{n\\to\\infty}\\sum_{n\\to\\infty}^n x_i$$ donde $x\\in\\mathbb{R}$`, "show":false});
      }

        Getnews(iduser: string){
                return this.http.get<any>(`${environment.apiURL}/api/news/ControllerAll`);
            }

            newsupdate(newid: string, title: string, description: string,  show: string, filew:File) {

              const fd = new FormData();
              fd.append('title', title);
              fd.append('description', description);
              fd.append('show', show);
              fd.append('image', filew);
              return this.http.put(`${environment.apiURL}/api/news/Controller/${newid}`, fd, {reportProgress:true, observe:"events"});
            }

            newsdelete(newid: string) {
              return this.http.delete(`${environment.apiURL}/api/news/Controller/${newid}`);
            }

showhidenews(newid: string, show: string) {
  console.log(show);
  return this.http.put(`${environment.apiURL}/api/news/Controller_show/${newid}`, { 'show': show});
}

}
