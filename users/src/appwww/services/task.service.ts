import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
private URL = `${environment.apiURL}/api/task/Controller`;
  constructor(private http: HttpClient, private router: Router) { }

savetask(task:string, theme:string, unidad:string, curse:string, user:string, filew:File) {
    console.log(filew)
    const fd = new FormData();
    fd.append('task', task);
    fd.append('theme', theme);
    fd.append('unidad', unidad);
    fd.append('curse', curse);
    fd.append('user', user);


    fd.append('image', filew);
//task, theme, unidad, curse, user
    //    return this.http.post<any>(this.URL, {task, theme, unidad, curse, user, filew});
    return this.http.post(`${this.URL}`, fd, { reportProgress: true, observe: "events" });

}

getTask(user:any) {
    console.log(user)
    return this.http.get<any>(`${this.URL}/${user}`);
  }

    updatetask(task:string, note:string, id: string, archivo: File) {
    const fd = new FormData();
    fd.append('task', task);
            fd.append('note', note);
    fd.append('image', archivo);
    return this.http.put(`${this.URL}/${id}`, fd, { reportProgress: true, observe: "events" });
    //    return this.http.put(`${this.URI}/${id}`, { 'name': title, 'email': description, 'password':password });
  }

getfiles(user:string, curse: string ) {
    return this.http.get<any>(`${environment.apiURL}/api/task/ControllerAll/${user}/${curse}`);
  }

  updatefiles(user:string, curse: string ) {
    return this.http.put<any>(`${this.URL}/${user}/${curse}`, {user});
  }


}
