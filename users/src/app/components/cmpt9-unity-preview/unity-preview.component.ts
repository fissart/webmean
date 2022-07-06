import { Component, OnInit } from '@angular/core';
import { CurseService } from "../../services/curse.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ngx-katex';

@Component({
    selector: 'app-unity-preview',
    templateUrl: './unity-preview.component.html',
    styleUrls: ['./unity-preview.component.css']
})
export class UnityPreviewComponent implements OnInit {

    photo: any = [];
    // options: KatexOptions = {
    //     displayMode: true,
    //     macros: {
    //         "\\RR": "\\mathbb{R}",
    //         "\\CC": "\\mathbb{C}",
    //         "\\WW": "\\mathbb{W}"
    //     },
    //     errorColor: '#cc0000',
    // };
    id!: string;
    markdown!: string;

    markdown2!: string;
    markdown3!: string;

    apiUrl = environment.apiURL;

    constructor(private curseService: CurseService, private router: ActivatedRoute, private routerr: Router
    ) { }

    ngOnInit(): void {
        this.router.params.subscribe(params => {
            //this.id=params['idunity'];
            this.curseService.getUnity(params['idunity'])
                .subscribe(
                    (res: any) => {
                        this.photo = res;
                        //console.log(res);
                        this.markdown = res.description;
                        this.markdown2 = res.task;
                        this.markdown3 = res.test;
                        this.id = res._id;
                    },
                    err => console.log(err)
                )
        });
    }


    updateUnity(id: HTMLInputElement, title: HTMLInputElement, description: HTMLTextAreaElement, task: HTMLTextAreaElement, test: HTMLTextAreaElement, time: HTMLInputElement, timeex: HTMLInputElement) {
        this.curseService.updateUnity(this.id, title.value, description.value, task.value, test.value, time.value, timeex.value)
            .subscribe(
                res => {
                    //console.log(res);
                    this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                },
                err => console.log(err)
            );
        return false;
    }

}
