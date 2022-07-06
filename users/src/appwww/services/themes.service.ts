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
    return this.http.post<any>(this.URL, {title:"Título", description:`<h1 class='bg-primary border p-1 mb-1 rounded'>
APRENDIZAJE ESPERADO
</h1>
<div class='bg-info p-1 mb-2 rounded'>
<h3 class='bg-light border rounded p-1 mb-1'>
Capacidades: Embebe objetos
</h3>
<h3 class='bg-light border rounded p-1 mb-1'>
Conocimientos: Conoce embebibimiento
</h3>
<h3 class='bg-light border rounded p-1 m-0'>
Actitudes: Asume responsabilidad
</h3>
</div>


<h1 class='bg-primary border p-1 mb-1 rounded'>
SECUENCIA DIDÁCTICA
</h2>
<p class="p-1 m-1 bg-warning">
Motivación, desarrollo y evaluación permanentes de  actitudes
</p>
<div class='bg-info p-1 mb-2 rounded'>
<h3 class='bg-light border rounded p-1'>
INICIO (20min) {Despertar el interés - Recuperar saberes previos - Estimular el conflicto cognitivo}. RECURSOS: Diapositiva proyector, pizarra, plumones.
</h3>

<p class="h6 pb-1">
Estructuras planas y tridimensionales tipos
</p>

<h3 class='bg-light border rounded  p-1'>
DESARROLLO (20min) {Adquirir información - Aplicar - Transferir lo aprendido}. RECURSOS: Diapositiva proyector, pizarra, plumones.
</h3>

<p class="h6 pb-1">
Desarrollo de la sesión construcción del triángulo áureo y uso de geogebra
</p>

<h3 class='bg-light border rounded  p-1'>
CIERRE (20min)  {Reflexionar sobre el proceso de aprendizaje}. RECURSOS: Diapositiva proyector, pizarra, plumones.
</h3>

<p class="h6 pb-1">
Se realiza preguntas retroalimentativas ¿Qué otros estructuras bidimensionales y tridimensionales podrían utilizar?
¿Compondría estructuras más complejas en bases a esta estructura?
</p>

</div>

<h1 class='bg-primary border p-1 mb-1 rounded'>
EVALUACIÓN
</h1>

<div class='bg-success text-light p-1 mb-2 rounded'>
<h3 class='bg-info border rounded p-1 mb-1'>
CRITERIOS DE EVALUACIÓN DE LOS APRENDIZAJES
</h3>
<p>Formula y construye una estructura según pautas establecidas</p>
<p>INDICADORES DE EVALUACIÓN</p>
<ol>
<li>
Construye el triángulo áureo
</li>
<li>
Compone en base al estructura del triángulo áureo
</li>
</ol>
<h3 class='bg-info border rounded p-1 mb-1'>
ACTITUD ANTE EL ÁREA
</h3>
<p>Presta atención y participa en las actividades</p>
<p>INDICADORES DE EVALUACIÓN</p>
<ol>
<li>
Presta atención
</li>
<li>
Participa activamente
</li>
<li>
Colabora con sus compañeros
</li>
</ol>
<p>INSTRUMENTOS DE EVALUACIÓN</p>
<ol>
<li>
Lista de cotejo
</li>
<li>
Ficha de obervación
</li>
</ol>
<p>INSTRUMENTOS DE EVALUACIÓN</p>
<ol>
<li>
Lista de cotejo
</li>
<li>
Ficha de obervación
</li>
</ol>
</div>

<h1 class='bg-primary border p-1 mb-1 rounded'>
REFERENCIAS
</h1>

<div class='bg-light p-1 mb-2 rounded'>

<ol class='bg-light m-0'>
<li>
<a class="btn btn-outline-warning" href="https://drive.google.com/file/u/0/d/0B1Ga40SmVyy-TTRWcXNkRGYxY00/view?resourcekey=0-tXQ867e7G7OY2bMQzshTKQ" target="_blanck">Libro</a>
</li>
<br>
<li>
<a class="btn btn-outline-warning"
 href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones en la naturaleza</a>
</li>
<br>
<li>
<a class="btn btn-outline-warning"
 href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones</a>
</li>
</ol>

</div>

<h1 class='bg-primary border p-1 mb-1 rounded'>
ANEXOS
</h1>
<div class='bg-info p-1 mb-2 rounded'>
<h3 class='bg-light border rounded p-1 mb-1'>
INSTRUMENTOS
</h3>
<iframe width="100%" height="700" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=663B3002C660A66%213145&authkey=%21ACU-c7Jq42zc-jE&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false"></iframe>
<hr>
<iframe width="100%" height="700" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=663B3002C660A66%213143&authkey=%21ANASoDTDFp4_JAg&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false"></iframe>
<hr>
<iframe src="https://onedrive.live.com/embed?cid=0663B3002C660A66&resid=663B3002C660A66%213147&authkey=ALNWzY_Vt1xzS9c&em=2" width="100%" height="500" frameborder="0" scrolling="no"></iframe>
<h3 class='bg-light border rounded p-1 mt-2 mb-0'>
MATERIALES
</h3>
<img class='bg-light p-1 m-auto' src="https://thumbs.dreamstime.com/b/elegant-blue-background-swirls-space-your-text-elegant-blue-background-swirls-space-your-text-159291073.jpg" width="100%"
/>
<h3 class='bg-light border rounded p-1 mt-2 mb-0'>
VIDEOS
</h3>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZnuwB35GYMY?start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
