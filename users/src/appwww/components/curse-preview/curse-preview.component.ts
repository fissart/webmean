import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { CurseService } from '../../services/curse.service'
import { Photo } from '../../interfaces/Photo'

import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './curse-preview.component.html',
  styleUrls: ['./curse-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  onImgError(event: any) {
//		event.target.src = 'https://source.unsplash.com/random/1200x1000/?img=0'
event.target.src = './assets/negz.jpg'
	}

  apiUrl = environment.apiURL;
  id!: string;
  photo: Photo[] = [];
  public archivos: any = [];
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





  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: CurseService,
    private router: Router
  ) { }

markdown!: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          (res: any) => {
            this.photo = res;
            console.log(res)
            this.markdown = res.description;
            //console.log(this.description)
          },
          err => console.log(err)
        )
    });

  }



  capturandoFile(event: any) {
    const ww = event.target.files[0];
    this.archivos = [];//resetea la matriz a rango 1
    this.archivos.push(ww);
    //console.log(event.target.files);
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
        this.router.navigate(['/user']);
      })
  }
  /*
    updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement){
      this.photoService.updatePhoto(this.id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      });
      return false;
    }
    */
  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.photoService.updatePhoto(this.id, title.value, description.value, this.archivos[0])
    .subscribe((res: any) => {
        this.loading = "false";
        this.value = Math.round((100 / res.total) * res.loaded);
        if (res.total == res.loaded && res.type > 0 ) {
            if(localStorage.getItem('idcurso')){
          this.router.navigate(['/curso', localStorage.getItem('idcurso')])
            }else{
                      this.router.navigate(['/'])

            };
        }
        console.log(res)
      });
    return false;
  }

  /*
    updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
      this.photoService.updatePhoto(this.photo._id, title.value, description.value)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/photos']);
        });
      return false;
    }
    */
}
