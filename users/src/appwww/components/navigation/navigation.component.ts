import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CurseService } from '../../services/curse.service'
import { UsersService } from "../../services/users.service";

import { environment } from '../../../environments/environment';
import { Photo } from '../../interfaces/Photo'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  apiUrl = environment.apiURL;
  //photo: Photo[] = [];
    public photo: any = [];
public isCollapsed = true;

 public idcurso: any = "";
 public rol: any = "";
 public user: any = "";

    constructor(public authService: AuthService, public curseService: CurseService, public userService: UsersService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { iconRegistry.addSvgIconLiteral('www', sanitizer.bypassSecurityTrustHtml(`
  <svg
   width="93.745262mm"
   height="69.319557mm"
   viewBox="0 0 93.745263 69.319558"
   version="1.1"
   id="svg5"
   sodipodi:docname="menu-icon.svg"
   inkscape:version="1.1 (c68e22c387, 2021-05-23)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="0.90990214"
     inkscape:cx="71.985763"
     inkscape:cy="150.01613"
     inkscape:window-width="1366"
     inkscape:window-height="705"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-46.459988,-73.17946)">
    <g
       id="g845"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g847"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g849"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g851"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g853"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g855"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g857"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g859"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g861"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g863"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g865"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g867"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g869"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g871"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <g
       id="g873"
       transform="matrix(0.26458333,0,0,0.26458333,38.17181,56.448601)">
</g>
    <path
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 67.889181,78.17946 H 131.57048"
       id="path1618" />
    <path
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 51.459988,106.9669 H 115.14129"
       id="path1618-4" />
    <path
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 71.52396,137.49902 h 63.68129"
       id="path1618-4-4" />
  </g>
</svg>
`));}

  ngOnInit() {
  //this.imguser = localStorage.getItem('imguser');
            //console.log( localStorage.getItem('idcurso'),"wwwwwwwwwwwwww");
            this.idcurso = localStorage.getItem('idcurso');

			if (localStorage.getItem('id')) {
			this.userService.getUser()
				.subscribe(
					(res: any) => {
						this.photo = res
					//	console.log(res)
                  //localStorage.setItem('imguser', res.foto);
					},
					err => console.log(err)
				);
		};
/*
        setTimeout
        (() => {
              if(this.photo.length == 0){
                this.authService.logout()
              }
              console.log("Hello from setTimeout");
              console.log(this.photo);
          }, 10000);
*/
  }
    /*
  OnChanges() {
     this.imguser = localStorage.getItem('imguser');
     this.idcurso = localStorage.getItem('idcurso');
      console.log( localStorage.getItem('idcurso'));
  }
  */
  onImgError(event: any) {
    event.target.src = './assets/negz.jpg'
    //event.target.src = 'https://source.unsplash.com/random/800x800/?img=0'
  }


}
