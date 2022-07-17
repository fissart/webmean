import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service'
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  idtheme: string = "";
    idunity: string = ""
iduser: string = "";
    idcurse: string = ""
    pdfSrc: string = ""
    type: string = ""
    name: string = ""
  markdown="Escriba algo aqui"
/*
  `Este es un modelo de como puede escribir (formato html) en esta área borre todo y escriba<h1 class='bg-info text-success border p-1 rounded'>Titulo</h1>
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

<ul>
<li><a href="https://katex.org/docs/support_table.html" target="_blanck">Katex informaciones soportes </a></li>
<li><a href="https://getbootstrap.com/docs/4.0/" target="_blanck">Bootstrap informaciones soportes </a></li>
</ul>

$$\\begin{Bmatrix} a & b \\\\   c & d\\end{Bmatrix}$$

$$\\int_1^3=\\lim_{n\\to\\infty}\\sum_{n\\to\\infty}^n x_i$$ donde $x\\in\\mathbb{R}$`;
*/
  apiUrl = environment.apiURL;
  photo: any = [];


 public archivos: any[] = [];
    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public _value: number = 0;

    get value(): number {
        return this._value;
    }
    set value(value: number) {
        if (!isNaN(value) && value <= 100) {
            this._value = value;
        }
    }


  // options: KatexOptions = {
  //   displayMode: true,
  //   macros: {
  //     "\\RR": "\\mathbb{R}",
  //     "\\CC": "\\mathbb{C}",
  //     "\\WW": "\\mathbb{W}"
  //   },
  //   errorColor: '#cc0000',
  // };

  constructor(
    private router: ActivatedRoute,    private routerr:Router,
    private task: TaskService
  ) { }

  ngOnInit(): void {
    localStorage.setItem("idunity", this.router.snapshot.paramMap.get('idunity') + '')
      this.iduser = localStorage.getItem('id') || "";
      this.idcurse = localStorage.getItem('idcurso') || "";
      this.idtheme = this.router.snapshot.paramMap.get('idtheme') + '';
      this.idunity  = this.router.snapshot.paramMap.get('idunity') + '';



console.log(localStorage.getItem('id') || "" )
/*
this.router.params.subscribe(params => {

      this.servicephoto.getPhoto(localStorage.getItem('idcurso') || "")
        .subscribe(
          (res: any) => {
            this.photo = res[0];
            console.log(res)
          },
          err => console.log(err)
        )
    });
  */
}


  onImgError(event: any) {
        event.target.src = './assets/negz.png'
    }
capturandoFile(event: any) {
    const ww = event.target.files[0];
    this.archivos = [];//resetea la matriz a rango 1
    this.pdfSrc = "";//resetea la matriz a rango 1
    this.archivos.push(ww);
    console.log(event.target.files[0].type);
    if (event.target.files[0]) {
      this.type = event.target.files[0].type
      this.name = event.target.files[0].name
      console.log(event.target.files);
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(event.target.files[0]);
    }


  }



savetask(task: HTMLTextAreaElement) {

    console.log(this.idtheme, this.idunity, this.idcurse, this.iduser)
        this.task.savetask( task.value, this.idtheme, this.idunity, this.idcurse, this.iduser, this.archivos[0] )
            .subscribe(
                (res:any) => {
                    this.loading = "false";
                    this.value = Math.round((100 / res.total) * res.loaded);
                    if (res.total == res.loaded && res.type > 0 && res.ok) {
                    console.log(res.ok);
                      this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                    }
                },
                err => console.log(err)
            );
        return false;
        }

}
