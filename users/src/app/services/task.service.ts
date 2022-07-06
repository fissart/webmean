import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

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
    return this.http.post(`${environment.apiURL}/api/task/Controller`, fd, { reportProgress: true, observe: "events" });
  }

getTask(user:any) {
    console.log(user)
    return this.http.get<any>(`${environment.apiURL}/api/task/Controller/${user}`);
  }

updatetask(task:string, note:string, id: string, archivo: File) {
    const fd = new FormData();
    fd.append('task', task);
    fd.append('note', note);
    fd.append('image', archivo);
    return this.http.put(`${environment.apiURL}/api/task/Controller/${id}`, fd, { reportProgress: true, observe: "events" });
  }

getfiles(user:string, curse: string ) {
    return this.http.get<any>(`${environment.apiURL}/api/task/ControllerAll/${user}/${curse}`);
  }

updatefiles(user:string, curse: string ) {
    return this.http.put<any>(`${environment.apiURL}/api/task/Controller/${user}/${curse}`, {user});
  }

}
