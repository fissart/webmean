import { Component, OnInit } from '@angular/core';
import { ThemesService } from "../../services/themes.service";
//import { Router } from '@angular/router';
import { ActivatedRoute, Router} from '@angular/router';
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';

@Component({
    selector: 'app-theme-preview',
      templateUrl: './theme-preview.component.html',
    styleUrls: ['./theme-preview.component.css']
})
export class ThemePreviewComponent implements OnInit {
    photo: any = [];
// options: KatexOptions = {
//         displayMode: true,
//         macros: {
//             "\\RR": "\\mathbb{R}",
//             "\\CC": "\\mathbb{C}",
//             "\\WW": "\\mathbb{W}"
//         },
//         errorColor: '#cc0000',
//     };
    markdown!: string;
    markdown2!: string;
id!:string;
    apiUrl = environment.apiURL;
    type: string = ""
        name: string = ""

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


    constructor(private themesService: ThemesService, private router: ActivatedRoute, private routerr: Router,
    ) { }

    ngOnInit(): void {
        this.router.params.subscribe(params => {
        //console.log(params['idtheme']);
            this.themesService.gettheme(params['idtheme'])
                .subscribe(
                    (res: any) => {
                        this.photo = res;
                        //console.log(res._id);
        this.markdown = res.description;
        this.markdown2 = res.task;
        this.id = res._id;

                    },
                    err => console.log(err)
                )
        });
    }

    onImgError(event: any) {
           event.target.src = './assets/negz.jpg'
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


    updatetheme(title: HTMLInputElement, description: HTMLTextAreaElement, task: HTMLTextAreaElement, time: HTMLInputElement) {
        //console.log(this.id);
        this.themesService.updateTheme(this.id, title.value, description.value, task.value, time.value, this.archivos[0])
            .subscribe(
                (res: any) => {
                  this.loading = "false";
                  this.value = Math.round((100 / res.total) * res.loaded);
                  console.log(res.total);
                  console.log(res.loaded);
                  if (res.total == res.loaded && res.type > 0) {
//                         this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);

                    console.log(res);
                    this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                  }
                },
                err => console.log(err)
            );
        return false;
    }

}
