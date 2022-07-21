import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service'
import { environment } from '../../../environments/environment';

//import { KatexOptions } from 'ng-katex';

// declare var markdownitw: any;
// declare var texmath: any;
// declare var katex: any;

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.css']
})
export class TaskPreviewComponent implements OnInit {
        apiUrl = environment.apiURL;
  photo: any = [];

  markdown!: string;
  markdownw!: string;
  type: string = ""
      name: string = ""

      //tm = texmath.use(katex);
      //md = markdownit({html:true}).use(this.tm,{delimiters:'dollars'});
      //ww = this.md.render(this.markdownw)


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

//  declare function md(): void;
  constructor(
    private router: ActivatedRoute,    private routerr:Router,
    private task: TaskService
  ) { }


  ngOnInit(): void {
this.router.params.subscribe(params => {
      console.log(this.router.snapshot.paramMap.get('idtask') + '')
      this.task.getTask(this.router.snapshot.paramMap.get('idtask') + '')
        .subscribe(
          (res: any) => {
            this.photo = res;
      this.markdown = res.task;
            console.log(res)
          },
          err => console.log(err)
        )
    });
}
 onImgError(event: any) {
        event.target.src = './assets/negz.png'
    }
capturandoFile(event: any) {
    const ww = event.target.files[0];
            this.archivos = [];//resetea la matriz a rango 1

    this.archivos.push(ww);
    //console.log(event.target.files);
    if (event.target.files[0]) {
      this.type = event.target.files[0].type
      this.name = event.target.files[0].name
          //console.log(event.target.files);
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

savetask(task: HTMLTextAreaElement) {
        this.task.updatetask(task.value, "", this.router.snapshot.paramMap.get('idtask') + '', this.archivos[0])
            .subscribe((res: any) => {
                this.loading = "false";
                this.value = Math.round((100 / res.total) * res.loaded);
                console.log(res.total);
                console.log(res.loaded);
                if (res.total == res.loaded && res.type > 0) {
                    this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                }
            });
        return false;
        }
}
