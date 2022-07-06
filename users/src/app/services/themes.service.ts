import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private URL = `${environment.apiURL}/api/themes/Controller`;
  private URLtask = `${environment.apiURL}/api/task/Controller`;

  constructor(private http: HttpClient, private router: Router) { }

 //
  themes(user:any) {
    return this.http.post<any>(this.URL + '/api/wwu', user);
  }

  getThemes(user:any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  createtheme( unidad: string, curse: string, user:string) {
    return this.http.post<any>(this.URL, {title:"Título", description:`<div class='h4 border p-1 mb-2'>
APRENDIZAJE ESPERADO
<ol class='m-0 h6'>
<li>
<b>Capacidades:</b> Embebe objetos
</li>
<li>
<b>Conocimientos:</b> Conoce embebibimiento
</li>
<li>
<b>Actitudes:</b> Asume responsabilidad
Construye el triángulo áureo
</li>
</ol>
</div>


<div class='h4 border p-1 mb-2'>
SECUENCIA DIDÁCTICA.
<i class="p-1  m-0 h6">Motivación, desarrollo y evaluación permanentes de  actitudes.
</i>

<h3 class='border p-1 m-0'>
<b>INICIO (20min)</b> Despertar el interés - Recuperar saberes previos - Estimular el conflicto cognitivo. <i>RECURSOS: Diapositiva proyector, pizarra, plumones.</i>
<hr class="my-1">
<p class="h6 pb-1 h5 m-0">
Estructuras planas y tridimensionales tipos
</p>
</h3>

<h3 class='border p-1 my-1'>
<b>DESARROLLO (20min)</b> Adquirir información - Aplicar - Transferir lo aprendido. <i>RECURSOS: Diapositiva proyector, pizarra, plumones.</i>
<hr class="my-1">
<p class="h6">
Desarrollo de la sesión construcción del triángulo áureo y uso de geogebra
</p>
</h3>

<h3 class='border p-1 m-0'>
<b>CIERRE (20min)</b>  Reflexionar sobre el proceso de aprendizaje. <i>RECURSOS: Diapositiva proyector, pizarra, plumones.</i>
<hr class="my-1">
<p class="h6">
Se realiza preguntas retroalimentativas ¿Qué otros estructuras bidimensionales y tridimensionales podrían utilizar?
¿Compondría estructuras más complejas en bases a esta estructura?
</p>
</h3>

</div>

<div class='h4 border p-1 mb-2'>
EVALUACIÓN
<h3 class='bg-light p-1 mb-1'>
<b>CRITERIOS DE EVALUACIÓN DE LOS APRENDIZAJES:</b>
Formula y construye una estructura según pautas establecidas
<hr class="my-0">
<b>Indicadores de evaluación</b>
<ol class='m-0 h6'>
<li>Construye el triángulo áureo</li>
<li>Compone en base al estructura del triángulo áureo
</li>
</ol>

<b>Instrumentos</b>
<ol class='m-0 h6'>
<li>Ficha de observación
</li>
<li>Lista de cotejo
</li>
</ol>
</h3>

<h3 class='bg-light p-1 mb-1'>
<b>ACTITUD ANTE EL ÁREA:</b> Presta atención y participa en las actividades
<hr class="my-0">
<b>Indicadores de evaluación</b>
<ol class='m-0 h6'>
<li>Presta atención
</li>
<li>Participa activamente
</li>
<li>Colabora con sus compañeros
</li>
</ol>

<b>Instrumentos</b>
<ol class='m-0 h6'>
<li>Prueba  escrita
</li>
<li>Lista de cotejo
</li>
</ol>
</h3>
</h3>

</div>

<div class='h4 border p-1 mb-2'>
BIBLIOGRAFÍA




<ol class='m-0 h6'>
<li>
<a class="btn btn-info mb-1" href="https://drive.google.com/file/u/0/d/0B1Ga40SmVyy-TTRWcXNkRGYxY00/view?resourcekey=0-tXQ867e7G7OY2bMQzshTKQ" target="_blanck">Libro de matemáticas aplicadas</a>
</li>
<li>
<a class="btn btn-info mb-1"
 href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones en la naturaleza</a>
</li>

<li>
<a class="btn btn-info mb-0"
 href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones</a>
</li>
</ol>

</div>

<div class='h4 border p-1 mb-2'>
ANEXOS

<div class='h5 border p-1 mb-2'>
Materiales
<ol class="mb-0">
<li><a  class="btn btn-info mb-1" target="_blank" href="https://www.geogebra.org/classic">
Geogebra Web
</a></li>
<li><a  class="btn btn-info mb-1" target="_blank" href="http://asymptote.ualberta.ca/">
Asymptote Web
</a></li>
<li><a  class="btn btn-info mb-1" target="_blank" href="https://sketchfab.com/">
Sketchfab plataforma 3d
</a></li>
<li><a  class="btn btn-info mb-1" target="_blank" href="https://app.sketchup.com/app?hl=en">
Sketchup Web
</a></li>
<li><a  class="btn btn-info mb-1" target="_blank" href="https://blender.org">
Blender
</a></li>
<li><a  class="btn btn-info mb-1" target="_blank" href="http://fractales.cf">
fractales.cf
</a></li>
</ol>
</div>

<div class='h5 border p-1 mb-2'>
Videos
<hr class="my-1">
<a class="btn btn-info mb-1" href="https://studio.youtube.com/channel/UCL5FCvd7ZTtecFKf8nMyn8Q/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" target="_blanck">Canal youtube</a>

</div>
</div>`, task:"Tarea"  , time:"2022-12-12", unidad, curse, user });
  }
  updateTheme(id: string, title: string, description: string, task: string, time: string, filew:File) {
    console.log(filew)
    const fd = new FormData();
    fd.append('title', title);
    fd.append('task', task);
    fd.append('description', description);
    fd.append('time', time);
    fd.append('image', filew);
        //    return this.http.post<any>(this.URL, {task, theme, unidad, curse, user, filew});
    //return this.http.post(`${this.URL}`, fd, { reportProgress: true, observe: "events" });
    console.log(id);
    return this.http.put<any>(`${this.URL}/${id}`, fd, { reportProgress: true, observe: "events"});
  }

  gettheme(id: string) {
    return this.http.get(`${this.URL}/${id}`);
  }


  delete(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }

deletetask(id: string) {
    return this.http.delete(`${this.URLtask}/${id}`);
  }


}
