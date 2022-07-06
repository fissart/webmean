import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CurseService } from '../../services/curse.service'
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
//import { ClassGetter } from '@angular/compiler/src/output/output_ast';


interface HtmlInputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}


@Component({
	selector: 'app-asignature-form',
	templateUrl: './asignature-form.component.html',
	styleUrls: ['./asignature-form.component.css']
})

export class PhotoFormComponent implements OnInit {
	public loading!: string;

	public archivos: any = [];
	public photoSelected!: string | ArrayBuffer | null;
	public _value: number = 0;

	get value(): number {
		return this._value;
	}
	set value(value: number) {
		if (!isNaN(value) && value <= 100) {
			this._value = value;
		}
	}


	ngOnInit() {
		console.log(localStorage.getItem('idcurso'))
		console.log(localStorage.getItem('id'))
	}

	constructor(private sanitizer: DomSanitizer, private photoService: CurseService, private router: Router) { }

	capturandoFile(event: any) {
		const ww = event.target.files[0];
		this.archivos.push(ww);
		//console.log(event.target.files);
		if (event.target.files[0]) {
			const reader = new FileReader();
			reader.onload = e => this.photoSelected = reader.result;
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
		//console.log( localStorage.getItem('id'));
		//console.log(this.archivos[0]);
		this.photoService
			.createCurse(title.value)
			.subscribe(
				(res: any) => {
					this.loading = "false";
					this.value = Math.round((100 / res.total) * res.loaded);
					if (res.total == res.loaded && res.type > 0) {
						const idcurso = localStorage.getItem('idcurso');

//						console.log(localStorage.getItem('idcurso'))
						if (idcurso !== null) {
							this.router.navigate(['/curso/', localStorage.getItem('idcurso')]);
						} else {
							this.router.navigate(['/']);
						}
						//	this.router.navigate(['/photos'])
					}
				},
				err => console.log(err)
			);
		return false;
	}
	/* 	
	*/




}
