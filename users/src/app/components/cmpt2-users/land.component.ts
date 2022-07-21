import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as THREE from 'three';
//import { OrbitControls } from "OrbitControls";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { UsersService } from "../../services/users.service";
import { CurseService } from '../../services/curse.service'
import { environment } from "../../../environments/environment";
//import { Www } from '../../interfaces/Www'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { KatexOptions } from 'ng-katex';
//import { KatexOptions } from 'ngx-markdown';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-land',
	templateUrl: './land.component.html',
	template: `<ng-katex [equation]="equation"></ng-katex>`,
	styleUrls: ['./land.component.css'],
})

export class LandComponent implements OnInit {
	equation: string = '\\sum_{i=1}^nx_i';
	options = {
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
      //"pinned": "flipInX",
      //"unpinned": "flipOutX"
      //"pinned": "bounceInDown",
      //"unpinned": "bounceOutUp"
      //"pinned": "swingInX",
      //"unpinned": "swingOutX"
      "pinned": "slideDown",
      "unpinned": "slideUp"
  }
    };

	todo = [
		'Get to work',
		'Pick up groceries',
		'Go home',
		'Fall asleep'
	];

	done = [
		'Get up',
		'Brush teeth',
		'Take a shower',
		'Check e-mail',
		'Walk dog'
	];

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}

	apiUrl = environment.apiURL;
	photos: any = [];
	wwwww = [];


	// options: KatexOptions = {
	// 	displayMode: true,
	// 	macros: {
	// 		"\\RR": "\\mathbb{R}",
	// 		"\\CC": "\\mathbb{C}",
	// 		"\\WW": "\\mathbb{W}"
	// 	},
	// 	errorColor: '#cc0000',
	// };

	public archivos: any = [];
	public photoSelected!: string | ArrayBuffer | null;
	public text: string = "";

	onImgError(event: any) {
		//		event.target.src = './assets/negz.jpg'
		 event.target.src = './assets/negz.png'
	}

	src = './assets/negz.jpg'

	constructor(
		private router: Router,
		private userService: UsersService,
		private curseService: CurseService,
		private modal: NgbModal
	) { }

    getuser() {
        this.userService.getUser()
				.subscribe(
					(res: any) => {
						this.photos = res;
						console.log("getUser")
                        //localStorage.setItem('imguser', res.foto);
					},
					err => console.log(err)
				);
    }


	ngOnInit() {
		if (localStorage.getItem('id')) {
			this.getuser()
		};

		this.userService.get().subscribe(
			(res: any) => {
				this.wwwww = res;
				console.log(res);
			},
			err => console.log(err)
		)
		localStorage.removeItem('idcurso');
	}

	open1(ww: any, textw: string) {
		this.modal.open(ww, { size: 'lg', scrollable: true })
		this.text = textw;

	}

	open2(www: any, textw: string) {
		this.modal.open(www, { size: 'xl', scrollable: true })
		this.text = textw;

	}



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



	deleteUser(ww: string, nlenght:string) {
        if(nlenght=='0'){
		if (window.confirm('Desea borrar este usuario?')) {
			this.userService.deletePhoto(ww)
				.subscribe(res => {
					console.log(res);
					this.router.navigate(['/user']);
				if(ww==localStorage.getItem('id')){
                localStorage.removeItem('id');
                }

					this.userService.get().subscribe(
						(res: any) => {
							this.wwwww = res;
					//		localStorage.removeItem('id');

							//console.log(res)
						},
						err => console.log(err)
					)
				})
		}
        }else{alert('Debe borrar todos los cursos del usuario')}

    }


	NewCurse(id: string) {
		//console.log( localStorage.getItem('id'));
		//console.log(this.archivos[0]);
		this.curseService
			.createCurse(id)
			.subscribe(
				(res: any) => {
					this.userService.get().subscribe(
						(res: any) => {
							this.wwwww = res;
							//console.log(res)
						},
						err => console.log(err)
					)
					/*this.loading = "false";
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
				*/},
				err => console.log(err)
			);
		return false;
	}

	deleteCurse(id: string) {
		if (window.confirm('Are sure you want to delete this item ?')) {
			this.curseService.deletePhoto(id)
				.subscribe(res => {
					console.log(res)
					this.userService.get().subscribe(
						(res: any) => {
							this.wwwww = res;
							//console.log(res)
						},
						err => console.log(err)
					)
				})
		}
	}

	selectedCard(id: string) {
		this.router.navigate(['/cursoup', id]);
		console.log(id);
	};

	goCurse(id: string) {
		this.router.navigate(['/curso', id]);
	};


	selectedUser(id: string) {
		this.router.navigate(['/user', id]);
		//console.log(id);
	};

	showProduct: boolean = false;

	opinionTRUE(img_id: string) {
		const ww = "verdad";
		this.userService.createOpinion(localStorage.getItem('id') || '{}', img_id, ww)
			.subscribe(res => {
				console.log(res);
				this.router.navigate(['/']);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)


			});

	}

	opinionFALSE(img_id: string) {
		const ww = "falso";

		this.userService.createOpinion(localStorage.getItem('id') || '{}', img_id, ww)
			.subscribe(res => {
				console.log(res);
				this.router.navigate(['/']);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)

			});

	}

/*

	opinionDelete(img_id: string) {
		this.userService.deleteOpinion(localStorage.getItem('id') || '{}', img_id)
			.subscribe(res => {
				console.log(res);
				this.router.navigate(['/']);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)

			});

	}
	someMethodWithFocusOutEvent3(event: any, id: string, title: string, description: string, password: string) {
		console.log(event.target.textContent, title, description);
		this.userService.updatePhoto(id, event.target.textContent, description, password, this.archivos[0])
			.subscribe(res => {
				console.log(res);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)
				this.router.navigate(['/']);
			});
	}
	someMethodWithFocusOutEvent2(event: any, id: string, title: string, description: string, password: string) {
		console.log(event.target.textContent, title, description);
		this.userService.updatePhoto(id, title, event.target.textContent, password, this.archivos[0])
			.subscribe(res => {
				console.log(res);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)
				this.router.navigate(['/']);
			});
	}
	someMethodWithFocusOutEvent(event: any, id: string, title: string, description: string, password: string) {
		console.log(event.target.textContent, title, description);
		this.userService.updatePhoto(id, title, description, event.target.textContent, this.archivos[0])
			.subscribe(res => {
				console.log(res);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)
				this.router.navigate(['/']);
			});


	}

*/


}


/*


db.wwws.insertMany(
[
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")}
])
*/
