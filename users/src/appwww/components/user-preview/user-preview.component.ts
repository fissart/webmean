import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from '../../services/users.service'
//import { WwwService } from '../../services/www.service'
import { Photo } from '../../interfaces/Photo'
//import { KatexOptions } from 'ng-katex';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})

export class UserPreviewComponent implements OnInit {
    apiUrl = environment.apiURL;
    id!: string;
    public photow: any[] = [];
    public archivos: any[] = [];
    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public _value: number = 0;

 public userrol: any = "";

    onImgError(event: any) {
        event.target.src = './assets/negz.jpg'
    }

    get value(): number {
        return this._value;
    }
    set value(value: number) {
        if (!isNaN(value) && value <= 100) {
            this._value = value;
        }
    }


    // options: KatexOptions = {
    //     displayMode: true,
    //     macros: {
    //         "\\RR": "\\mathbb{R}",
    //         "\\CC": "\\mathbb{C}",
    //         "\\WW": "\\mathbb{W}"
    //     },
    //     errorColor: '#cc0000',
    // };

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: UsersService,
        private router: Router
    ) { }
get_user(){
     this.photoService.getUser()
				.subscribe(
					(res: any) => {
						this.userrol = res.rol;
						console.log("getUser")
                        //localStorage.setItem('imguser', res.foto);
					},
					err => console.log(err)
				);
}
    ngOnInit() {
        this.get_user()
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this.photoService.getOneUser(this.id)
                .subscribe(
                    (res: any) => {
                        this.photow = res;
                        console.log(res)
                    },
                    err => console.log(err)
                )
        });
    }

    markdown!: string;

    capturandoFile(event: any) {
        console.log(event.target.files);
        console.log(this.archivos)
        const ww = event.target.files[0];
        this.archivos = [];//resetea la matriz a rango 1
        this.archivos.push(ww);
        if (event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    deletePhoto(id: string) {
        this.photoService.deletePhoto(id)
            .subscribe(res => {
                console.log(res)
                this.router.navigate(['/photos']);
            })
    }

    updatePhoto(title: HTMLInputElement, description: HTMLInputElement, password: HTMLInputElement, rol: HTMLInputElement) {
        this.photoService.updatePhoto(this.id, title.value, description.value, password.value, rol.value, this.archivos[0])
            .subscribe((res: any) => {
                this.loading = "false";
                this.value = Math.round((100 / res.total) * res.loaded);
                console.log(res.total);
                console.log(res.loaded);
                if (res.total == res.loaded && res.type > 0) {
                    this.router.navigate(['/']);
                }
            });
        return false;
    }

}
