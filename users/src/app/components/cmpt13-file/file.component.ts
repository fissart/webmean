import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { UsersService } from '../../services/users.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  options = {
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
    "pinned": "bounceInDown",
    "unpinned": "bounceOutUp"
  }
    };
    // options: KatexOptions = {
    //     displayMode: true,
    //     macros: {
    //         "\\RR": "\\mathbb{R}",
    //         "\\CC": "\\mathbb{C}",
    //         "\\WW": "\\mathbb{W}"
    //     },
    //     errorColor: '#cc0000',
    // };
    public text: string = "";
    public iduserlocal!: string;
    apiUrl = environment.apiURL;
    public loading!: string;
    public archivos: any[] = [];
    public user: any[] = [];
    markdown!: string;
    public textt: string = "";

  onImgError(event: any) {
        event.target.src = './assets/negz.jpg'
    }
    constructor(private TaskService: TaskService, private router: ActivatedRoute, private routerr: Router,
             private modal: NgbModal,  private Service: UsersService) { }
    photo: any = [];
    apiURL = environment.apiURL;

  ngOnInit(): void {
      this.router.params.subscribe(params => {
            //console.log(params['idcurso'])
      this.iduserlocal = params['iduser'] || "";

            this.TaskService.getfiles(params['iduser'], localStorage.getItem('idcurso') || "")
                .subscribe(
                    (res: any) => {
                        this.photo = res[0].unidades;
                        console.log(res[0].unidades);
                    },
                    err => console.log(err)
                )
                if (localStorage.getItem('id')) {
                    this.Service.getUser()
                        .subscribe(
                            (res: any) => {
                                this.user = res
                                console.log(res)
                          //localStorage.setItem('imguser', res.foto);
                            },
                            err => console.log(err)
                        );
                };

        });
  }
    open1(ww: any, textw: string) {
        this.modal.open(ww, { size: 'xl', scrollable: true })
        this.text = textw;
console.log(textw)
    }
    open2(www: any, textw: string) {
        this.modal.open(www, { size: 'xl', scrollable: true })
        this.text = textw;

    }
    open(good: any, textw: string, textww: string, textwww: string) {
        this.modal.open(good, { size: 'xl', scrollable: true })
        this.text = textw;
        this.markdown = textww;
        this.textt = textwww;

    }

updatenote(idtask: HTMLInputElement, task: HTMLTextAreaElement, note: HTMLInputElement) {
this.router.params.subscribe(params => {

    this.TaskService.updatetask(task.value, note.value, idtask.value, this.archivos[0] )
                .subscribe(
                    (res: any) => {
                        this.loading = "false";
                        console.log(res);
                        this.modal.dismissAll();
            this.TaskService.getfiles(params['iduser'], localStorage.getItem('idcurso') || "")
                .subscribe(
                    (res: any) => {
                        this.photo = res[0].unidades;
                        console.log(res[0]);

                        this.loading = "";

                    },
                    err => console.log(err)
                )

                    },
                    err => console.log(err)

    )

})
}
updatetask(idtask: string ) {
        this.routerr.navigate(['/task', idtask]);
    };

}
