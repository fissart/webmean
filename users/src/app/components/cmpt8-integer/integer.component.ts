import { Component, OnInit } from '@angular/core';
import { CurseService } from '../../services/curse.service'
import { UsersService } from '../../services/users.service'
import { ThemesService } from "../../services/themes.service";
import { TaskService } from '../../services/task.service'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import * as XLSX from 'xlsx';
  import { Svc27STDService } from '../../services/svc27-std.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-users-curse',
    templateUrl: './integer.component.html',
    styleUrls: ['./integer.component.css']
})

export class UsersCurseComponent implements OnInit {
  //name = 'www.xlsx';

/*
  exportToExcel(): void {
    console.log(this.photo);

    const rows = this.photo.map(row => ({
      name: row.userw[0].name,
      namew: row.userw[0].tasks
      }));
      console.log(rows);

    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
 //const worksheet = XLSX.utils.json_to_sheet(rows);
var i = 0;
 for (const [i, file] of this.photo.entries()) {
  console.log(i);
  const celda=`O${i+5}`
  const suma=`SUM(C${i+5}:L${i+5})`
//  XLSX.utils.sheet_set_array_formula(worksheet, "`N${i}`", "SUM(C30:C34)");
XLSX.utils.sheet_set_array_formula(worksheet, celda, suma);
worksheet["!cols"] = [ { wch: 5 },
  { wch: 30 },
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1} ,
  {wch: 4.1}
];

}
/*
    XLSX.utils.sheet_add_aoa(worksheet, [
      [1],
      ,
      [, , , {t: "n", f: 'SUMA(A1:A20, A20:A52)'}]  // <-- Write "abc" to cell E5
    ], { origin: "B54" });
//XLSX.utils.sheet_set_array_formula(worksheet, "C52", "SUMA(C2:C52)");

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
/* calculate column width
    //const max_width = element.reduce((w, r) => Math.max(w, r.nombre.length), 10);
    XLSX.writeFile(book, 'notas.xlsx');
  }
  */

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
    constructor(

      private svc27STDService: Svc27STDService,
      private curseService: CurseService,
      private themesService: ThemesService,
      private router: ActivatedRoute,
      private task: TaskService,
      private UsersService: UsersService,
      private routerr: Router,
      private modal: NgbModal,
    ) { }

    integeraverage : any = [];//integers
    photo: any = [];//integers
    themes: any = [];//themes
    teacher: any = [];//themes
    apiURL = environment.apiURL;
    user = localStorage.getItem('id') || "";
    rol: any = localStorage.getItem('rol') || "";
    curso = localStorage.getItem('idcurso') || "";
    datastd: any = [];//std
    curse: any = [];//std
    public archivos: any[] = [];
    public loading: string = "";

    onImgError(event: any) {
        event.target.src = '../../../assets/negz.png'
    }

        public text: string = "";
        public unitytitle: string = "";
        public themetitle: string = "";
        public texto: string = "";
        public textoimg: string = "";
getintegersuser()
{
  if (localStorage.getItem('id')) {
			this.UsersService.getUser()
				.subscribe(
					(res: any) => {
						this.teacher=res;
					},
					err => console.log(err)
				);
		};

}

getCurse(){
  this.router.params.subscribe(params => {
     this.curseService.getintegers(params['idcurso'])
          .subscribe(
              (res: any) => {
                  this.photo = res;
                  //console.log(res);
                  this.themes=res[0].cursse[0].units;
              },
              err => console.log(err)
          )
  });
}

getCurseOnly(){
  this.router.params.subscribe(params => {
     this.curseService.getPhoto(params['idcurso'])
          .subscribe(
              (res: any) => {
                  this.curse = res;
                  console.log(res);
              },
              err => console.log(err)
          )
  });
}

getIntegeraverage(){
  this.router.params.subscribe(params => {
     this.curseService.getintegersaverage(params['idcurso'])
          .subscribe(
              (res: any) => {
                  this.integeraverage = res;
                  console.log(res);
  //                this.themes=res[0].cursse[0].units;
              },
              err => console.log(err)
          )
  });
}

getstdwww(){ //estudiantes
this.svc27STDService.getstd(this.curso)
.subscribe(
(res: any) => {
this.datastd = res;
console.log(res);
},
err => console.log(err)
)
}

    ngOnInit(): void {
      if(this.rol==1){
        this.getstdwww()
      }
        //this.getintegersuser();
        this.getCurseOnly();
        this.getIntegeraverage()
    }


    open1(user:string){
        this.routerr.navigate(['/file', user])
    }



integer(user : any) {
        this.curseService.saveinteger(user, localStorage.getItem('idcurso') || "", localStorage.getItem('id') || "")
            .subscribe(
                (res:any) => {
                  this.getstdwww();
                  this.getIntegeraverage()
                  //this.getCurse();
                  //console.log(res);
                },
                err => console.log(err)
            );
        return false;
};

erraseinteger(id: string) {
    if (window.confirm('Desea retirar del curso?')) {
        this.curseService.deleteinteger(id)
            .subscribe(res => {
                  this.getstdwww();
                  this.getCurse();
            });

    }
};

    openwww(w: any, task: string, archivo: string, unitytitle: string, themetitle: string) {
//    console.log(this.text,this.textoimg);
        this.modal.open(w, { size: 'xl', scrollable: true })
        this.text=task;
        this.themetitle=themetitle;
        this.unitytitle=unitytitle;
        this.textoimg=archivo;
    }


    deletetask(idtask: string ) {
            if (window.confirm('Desea eliminar la tarea?')) {
                this.themesService.deletetask(idtask)
                    .subscribe(res => {

                      this.getCurse();

                    });
            }
        };


    onBlurMethod(event:any, id: string, task: string) {
      this.task.updatetask(task, event.target.value, id, this.archivos[0])
          .subscribe((res: any) => {

/*
            this.router.params.subscribe(params => {
            console.log(params['idcurso'])
            this.curseService.getintegers(params['idcurso'])
                .subscribe(
                (res: any) => {
                    this.photo = res;
                    console.log(res, "www");
                },
        err => console.log(err)
    )
    });
*/
          });
      return false;
      }

onBlurMean(event:any, user: string, title: string, ciclo: string, credito: string, especialidad: string) {
//this.loading = "true";
//console.log(event.target.value,this.user,this.curso,title);
//this.user==teacher
this.loading = "false";
//this.loading:true;
      if(event.target.value<=20&&event.target.value>=0 || event.target.value=="R"  || event.target.value=="L"){
        this.task.create_average(event.target.value, this.user, user, this.curso, title, ciclo, credito, especialidad)//curse ciclo carrera year user nombre
            .subscribe((res: any) => {
              this.loading = "";
              this.getIntegeraverage();
            });
            return false;
      }else{
        alert("La calificación es vigesimal, L : Licencia o R : Retirado")
        return false;
      }
      //this.loading = "false";

      }
      name = 'Angular';
      onBlurMeanUpdate(event:any, id: string) {
        console.log(event.target.value, id);
        if(event.target.value<=20&&event.target.value>=0 || event.target.value=="R"  || event.target.value=="L"){
      this.task.update_average(id, event.target.value)
            .subscribe((res: any) => {
              this.getIntegeraverage()
            });
      return false;
      }else{
        alert("La calificación es vigesimal, L : Licencia o R : Retirado")
         this.name = ' ';
        return false;
      }

      }

      delete_average(id: string) {
        this.task.delete_average( id )
            .subscribe(
                (res:any) => {
                  this.getIntegeraverage()
                },
                err => console.log(err)
            );
        return false;
}


      savetask(idtheme: string, idunity: string, idcurse: string, iduser: string) {
              this.task.savetask( "Tarea entregada sin archivo", idtheme, idunity, idcurse, iduser, this.archivos[0] )
                  .subscribe(
                      (res:any) => {

                        this.getCurse();

                      },
                      err => console.log(err)
                  );
              return false;
              }

//https://stackblitz.com/edit/angular6-export-xlsx-ghx2tg?file=src%2Fapp%2Fapp.component.ts
}
/*
{
    $match: {
        curse: curso,
    },
},


    db.users.aggregate([
    {
        $match: {
            'rol': '3',
        },
    },
    {
      $lookup: {
        from: 'integers',
        let: { userId: '$_id' },
        pipeline: [
            {$match: { $expr: { $and: [{ $eq: ["$user", "$$userId"] }, { $eq: ["$curse",  ObjectId("62d2d34faaee672e6cbd18ac")] },] } }},
            //{'$sort': {  'name': 1 }},
            //{'$limit': 10},
        ],
        as: 'www'
      }
    },
    {$sort: {  'www.name': 1 }},

  ]).pretty()


{
    $lookup: {
        from: "users",
        let: { www: "$userteach" },
        pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
        ],
        as: "userw",
    },
},

*/
