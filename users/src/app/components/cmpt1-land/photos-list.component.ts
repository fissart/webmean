import {
    Component, OnInit, ViewChild, AfterViewInit,
    ElementRef
} from '@angular/core';
// @Componentimport SwiperCore from 'swiper/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Title} from '@angular/platform-browser'
import { CurseService } from '../../services/curse.service'
import { UsersService } from '../../services/users.service'
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxHeadroomOption } from 'ngx-headroom';
import SwiperCore, { EffectCoverflow, EffectFade, EffectFlip, Virtual, SwiperOptions , Swiper, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, EffectFade, EffectFlip, Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]);




@Component({
    selector: 'app-photos-list',
    templateUrl: './photos-list.component.html',
    styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, AfterViewInit {
  user = localStorage.getItem('id')
    rol = localStorage.getItem('rol')

    options = {
      "offset": 0,
      "tolerance": 0,
      "classes": {
        "initial": "animated",
      "pinned": "bounceInDown",
      "unpinned": "bounceOutUp"
    }
      };

public text: string = "";
public texto: string = "";
public textoimg: string = "";
    public idcurso: string = "";
    public iduserteach: string = "";


    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public archivos: any = [];
    public _value: number = 0;

    get value(): number {
      return this._value;
    }
    set value(value: number) {
      if (!isNaN(value) && value <= 100) {
        this._value = value;
      }
    }
idnew!:string;
markdown!: string;
type!: string;
titlewww!: string;
imgwww!: string;
showww!: string;
name: string = ""

    apiURL = environment.apiURL;

    photointeger: any = [];
    newws: any = [];
    CurseTeacher: any = [];
    integeruser: any = [];


    photouser: any = [];
    ww = [];

    readMore = false;
    longText = `This is long paragraph text containseverall words continued. An example for implementingdynamicallyy limit long text`;

    onImgError(event: any) {
        event.target.src = './assets/www.webp'
    }

    public isCollapsed = false;
    isReadMore = true

    showText() {
        this.isReadMore = !this.isReadMore
    }

    constructor(
        private CurseService: CurseService,
        private UserService: UsersService,
        private router: Router,
        private Tw: Title,
        private modal: NgbModal,
        iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,

    ) {
        iconRegistry.addSvgIconLiteral('messenger', sanitizer.bypassSecurityTrustHtml(`
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
`));
        iconRegistry.addSvgIconLiteral('watsapp', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="30.667px" height="30.667px" viewBox="0 0 30.667 30.667" style="enable-background:new 0 0 30.667 30.667;"
	 xml:space="preserve">
<g>
	<path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
		c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
		c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
		c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
		c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
		c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
		c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
		c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
		c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
		c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
		C23.307,19.268,23.307,18.533,23.214,18.38z"/>
</g>

</svg>

`));
        iconRegistry.addSvgIconLiteral('facebook', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve">
<g id="XMLID_834_">
	<path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
</g>

</svg>

`));
        iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(`
<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
</svg>

`));
                iconRegistry.addSvgIconLiteral('integrate', sanitizer.bypassSecurityTrustHtml(`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 91.86" style="enable-background:new 0 0 122.88 91.86" xml:space="preserve"><style type="text/css"><![CDATA[
	.st0{fill-rule:evenodd;clip-rule:evenodd;}
]]></style><g><path class="st0" d="M111.89,75.94l-6.59,6.59c-1.73,1.73-4.58,1.73-6.31,0l-5.31-5.31c-2.74,1.46-5.68,2.58-8.78,3.3v6.88 c0,2.45-2.01,4.46-4.46,4.46h-9.32c-2.45,0-4.46-2.01-4.46-4.46v-7.51c-3.04-0.92-5.91-2.23-8.54-3.89l-4.87,4.87 c-1.73,1.73-4.58,1.73-6.31,0l-2.98-2.97l0.08-0.09l13.07-14.96c4.78,5.6,11.9,9.16,19.84,9.16c14.4,0,26.08-11.68,26.08-26.07l0,0 l0,0c0-14.4-11.68-26.08-26.08-26.08c-7.21,0-13.74,2.93-18.46,7.66l-4.81-0.18L41.51,16.5c0.15-0.21,0.31-0.4,0.49-0.59l6.59-6.59 c1.73-1.73,4.58-1.73,6.31,0l5.31,5.31c2.74-1.47,5.68-2.59,8.78-3.3V4.45C69.01,2.01,71.02,0,73.47,0h9.31 c2.45,0,4.46,2.01,4.46,4.46l0,7.51c3.04,0.92,5.91,2.24,8.54,3.89l4.87-4.87c1.73-1.73,4.58-1.73,6.31,0l6.59,6.59 c1.73,1.73,1.73,4.58,0,6.31l-5.31,5.31c1.47,2.74,2.59,5.68,3.3,8.78h6.88c2.44,0,4.46,2.01,4.46,4.46v9.32 c0,2.45-2.01,4.46-4.46,4.46h-7.5c-0.92,3.04-2.23,5.91-3.89,8.54l4.87,4.87C113.63,71.36,113.63,74.2,111.89,75.94L111.89,75.94 L111.89,75.94L111.89,75.94L111.89,75.94z M77.03,37.46c4.68,0,8.47,3.79,8.47,8.47c0,4.68-3.79,8.47-8.47,8.47 c-4.68,0-8.47-3.79-8.47-8.47C68.56,41.25,72.36,37.46,77.03,37.46L77.03,37.46z M60.14,45.41L37.13,71.76L36.36,59.4 C20.63,57.15,8.58,61.47,0,73.87c0.1-24.4,15.96-37.16,34.82-39.12l-0.79-12.61L60.14,45.41L60.14,45.41L60.14,45.41L60.14,45.41 L60.14,45.41L60.14,45.41z"/></g></svg>
`));

iconRegistry.addSvgIconLiteral('instagram', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;" xml:space="preserve">
  <g id="XMLID_13_">

  		<linearGradient id="XMLID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
  		<stop  offset="0" style="stop-color:#E09B3D"/>
  		<stop  offset="0.3" style="stop-color:#C74C4D"/>
  		<stop  offset="0.6" style="stop-color:#C21975"/>
  		<stop  offset="1" style="stop-color:#7024C4"/>
  	</linearGradient>
  	<path id="XMLID_17_" style="fill:url(#XMLID_2_);" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
  		c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
  		C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
  		c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
  		c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>

  		<linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
  		<stop  offset="0" style="stop-color:#E09B3D"/>
  		<stop  offset="0.3" style="stop-color:#C74C4D"/>
  		<stop  offset="0.6" style="stop-color:#C21975"/>
  		<stop  offset="1" style="stop-color:#7024C4"/>
  	</linearGradient>
  	<path id="XMLID_81_" style="fill:url(#XMLID_3_);" d="M275.517,133C196.933,133,133,196.933,133,275.516
  		s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6
  		c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083
  		C362.6,323.611,323.611,362.6,275.517,362.6z"/>

  		<linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
  		<stop  offset="0" style="stop-color:#E09B3D"/>
  		<stop  offset="0.3" style="stop-color:#C74C4D"/>
  		<stop  offset="0.6" style="stop-color:#C21975"/>
  		<stop  offset="1" style="stop-color:#7024C4"/>
  	</linearGradient>
  	<circle id="XMLID_83_" style="fill:url(#XMLID_4_);" cx="418.306" cy="134.072" r="34.149"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>

`));

                iconRegistry.addSvgIconLiteral('youtube', sanitizer.bypassSecurityTrustHtml(`
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  	 viewBox="0 0 461.001 461.001" style="enable-background:new 0 0 461.001 461.001;" xml:space="preserve">
                  <g>
                  	<path style="fill:#F61C0D;" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
                  		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
                  		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
                  		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  </svg>
`));

        iconRegistry.addSvgIconLiteral('getout', sanitizer.bypassSecurityTrustHtml(`
<svg
   version="1.1"
   id="Layer_1"
   x="0px"
   y="0px"
   viewBox="0 0 122.88 91.86"
   style="enable-background:new 0 0 122.88 91.86"
   xml:space="preserve"
   sodipodi:docname="integration.svg"
   inkscape:version="1.1 (c68e22c387, 2021-05-23)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs11" /><sodipodi:namedview
     id="namedview9"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     showgrid="false"
     showguides="true"
     inkscape:snap-global="false"
     inkscape:zoom="2.0129373"
     inkscape:cx="28.813615"
     inkscape:cy="12.171268"
     inkscape:window-width="1366"
     inkscape:window-height="705"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="Layer_1" /><style
     type="text/css"
     id="style2"><![CDATA[
	.st0{fill-rule:evenodd;clip-rule:evenodd;}
]]></style><path
     class="st0"
     d="m 111.89,75.94 -6.59,6.59 c -1.73,1.73 -4.58,1.73 -6.31,0 L 93.68,77.22 C 90.94,78.68 88,79.8 84.9,80.52 v 6.88 c 0,2.45 -2.01,4.46 -4.46,4.46 h -9.32 c -2.45,0 -4.46,-2.01 -4.46,-4.46 V 79.89 C 63.62,78.97 60.75,77.66 58.12,76 l -4.87,4.87 c -1.73,1.73 -4.58,1.73 -6.31,0 L 43.96,77.9 40.710934,74.62166 40.729728,62.519196 57.11,62.85 c 4.78,5.6 11.9,9.16 19.84,9.16 14.4,0 26.08,-11.68 26.08,-26.07 v 0 0 c 0,-14.4 -11.68,-26.08 -26.08,-26.08 -7.21,0 -13.74,2.93 -18.46,7.66 l -17.869498,-0.336159 0.0073,-9.840644 C 40.777763,17.133197 41.82,16.1 42,15.91 l 6.59,-6.59 c 1.73,-1.73 4.58,-1.73 6.31,0 l 5.31,5.31 c 2.74,-1.47 5.68,-2.59 8.78,-3.3 V 4.45 C 69.01,2.01 71.02,0 73.47,0 h 9.31 c 2.45,0 4.46,2.01 4.46,4.46 v 7.51 c 3.04,0.92 5.91,2.24 8.54,3.89 l 4.87,-4.87 c 1.73,-1.73 4.58,-1.73 6.31,0 l 6.59,6.59 c 1.73,1.73 1.73,4.58 0,6.31 l -5.31,5.31 c 1.47,2.74 2.59,5.68 3.3,8.78 h 6.88 c 2.44,0 4.46,2.01 4.46,4.46 v 9.32 c 0,2.45 -2.01,4.46 -4.46,4.46 h -7.5 c -0.92,3.04 -2.23,5.91 -3.89,8.54 l 4.87,4.87 c 1.73,1.73 1.73,4.57 -0.01,6.31 z M 77.03,37.46 c 4.68,0 8.47,3.79 8.47,8.47 0,4.68 -3.79,8.47 -8.47,8.47 -4.68,0 -8.47,-3.79 -8.47,-8.47 0,-4.68 3.8,-8.47 8.47,-8.47 z"
     id="path4"
     sodipodi:nodetypes="sssccssssccscccccsscssccccsscccsssccssssccssssccsssssss" /><path
     class="st0"
     d="m 12.18387,45.037867 24.590594,24.881427 0.0066,-12.38396 21.993998,0.447951 0.131757,-24.960961 -22.108243,-0.185036 0.01115,-12.634717 z"
     id="path4-2"
     sodipodi:nodetypes="cccccccc"
     style="clip-rule:evenodd;fill-rule:evenodd" /></svg>
`));
        iconRegistry.addSvgIconLiteral('go', sanitizer.bypassSecurityTrustHtml(`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 80.98" style="enable-background:new 0 0 122.88 80.98" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M100.66,40.49L60.58,80.98V60.81C35.23,55.56,15.21,61.35,0,80.63c2.64-39.65,29.73-58.78,60.58-60.05V0 L100.66,40.49L100.66,40.49z M122.88,40.49L82.79,80.98V68.04l27.28-27.55L82.79,12.94V0L122.88,40.49L122.88,40.49z"/></g></svg>
`));

        iconRegistry.addSvgIconLiteral('blogspot', sanitizer.bypassSecurityTrustHtml(`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M505.742,230.581v-0.004c-2.783-35.326-39.815-47.935-59.174-49.668c-4.283-0.375-13.174-0.364-18.739-0.283v-11.152
			C427.829,79.072,351.422,0,264.9,0H164.846C78.639,0,4.873,77.485,4.873,169.474v178.977c0,89.761,71.812,162.783,159.508,162.783
			l84.949,0.079l0.016,0.688h118.663c0.043,0,0.228,0,0.543,0c9.261,0,129.198-3.003,137.611-144.394
			C506.272,363.421,508.525,264.603,505.742,230.581z M484.302,366.628c-7.38,124.065-111.326,123.112-115.978,123.112h-87.326
			h-0.174H164.846c-75.424,0-137.712-63.799-137.712-141.288V169.474c0-79.925,63.571-147.213,137.712-147.213H264.9
			c74.663,0,140.668,68.67,140.668,147.213v33.984l11.204-0.337c5.978-0.174,22.579-0.533,28.068-0.038
			c0.37,0.031,37.329,3.701,39.546,29.458C487.18,265.318,484.313,365.965,484.302,366.628z"/>
	</g>
</g>
<g>
	<g>
		<path d="M261.161,136.348h-88.576c-25.75,0-45.163,17.223-45.163,40.799c0,23.842,20.261,42.679,45.163,42.679h88.576
			c24.902,0,45.163-18.837,45.163-42.679C306.324,153.571,286.911,136.348,261.161,136.348z M261.161,197.565h-88.576
			c-12.631,0-22.902-8.853-22.902-20.419c0-12.538,11.522-18.538,22.902-18.538h88.576c11.381,0,22.902,6,22.902,18.538
			C284.063,188.712,273.791,197.565,261.161,197.565z"/>
	</g>
</g>
<g>
	<g>
		<path d="M331.389,300.522h-162.25c-23,0-41.717,20.011-41.717,44.533c0,24.511,18.718,44.511,41.717,44.511h162.25
			c23,0,41.717-20,41.717-44.511C373.107,320.533,354.389,300.522,331.389,300.522z M331.389,367.304h-162.25
			c-10.728,0-19.457-10.011-19.457-22.25c0-12.25,8.728-22.272,19.457-22.272h162.25c10.728,0,19.457,10.022,19.457,22.272
			C350.846,357.293,342.117,367.304,331.389,367.304z"/>
	</g>
</g>

</svg>
`));
    }

config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop:true,
    //effect:'flip',
    //effect:'fade',
    effect:'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      centeredSlides:true,
      navigation:true,
    autoplay:{delay: 2000,
      disableOnInteraction: true},
    pagination: { clickable: true, type: 'progressbar'},
    scrollbar: { draggable: true },
};

capturandoFile(event: any) {
  const ww = event.target.files[0];
  this.archivos = [];//resetea la matriz a rango 1
  this.archivos.push(ww);
  //console.log(event.target.files);
  if (event.target.files[0]) {
    this.type = event.target.files[0].type;
    this.name = event.target.files[0].name;
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(event.target.files[0]);
  }
}

@ViewChild('new') w: ElementRef | undefined;
//closeResult = '';

    ngAfterViewInit(): void {
      //  this.open(this.w, "wwwwwwwww ww");
    }

    open(content: any) {
      this.modal.open(content, { size: 'lg', scrollable: true })
      }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

getintegersuser()
{
     this.CurseService.getcurseuseronly(localStorage.getItem('id') || "").subscribe(
            (res: any) => {
                this.photointeger = res;
                console.log(res, "getcurseuseronly");
            },
            err => console.log(err)
        )
}

getsCurseTeacher()
{
     this.CurseService.getsCurseTeacher(localStorage.getItem('id') || "").subscribe(
            (res: any) => {
                this.CurseTeacher = res[0].curses;
                console.log(res, "getsCurseTeacher");
            },
            err => console.log(err)
        )
}

gets_news(){
  this.CurseService.Getnews(localStorage.getItem('id') || "")
  .subscribe((res:any) => {
    console.log(res, "ww_w");
    this.newws = res;
    function www(taskss: any){
      for (const file of res) {
          if(file.show=='true'){
         var texto=file.user;
         return {w1:file.title,w2:file.description, w3:file.img};
         return texto;
    }
    };
    }
    if(www(res)){
    //www(res);
    this.text=www(res).w1;
    this.texto=www(res).w2;
    this.textoimg=www(res).w3;
    this.open(this.w);
    }
  },
err => console.log(err)
);
}

getnews(){
  this.CurseService.Getnews(localStorage.getItem('id') || "")
  .subscribe((res:any) => {
    console.log(res, "ww_w");
    this.newws = res;
  }
  );
  }

    ngOnInit() {
      this.Tw.setTitle('Inicio ESFAP');
      this.gets_news();
      this.getintegersuser();
      if(localStorage.getItem('rol')=="1" || localStorage.getItem('rol')=="2"){
      this.getsCurseTeacher()
      }
      localStorage.removeItem('idcurso');
      if(localStorage.getItem('rol')=="1"){
        this.CurseService.getPhotosUser(localStorage.getItem('id') || "").subscribe(
            (res: any) => {
                this.integeruser = res;
                console.log(res)
            },
            err => console.log(err)
        )
      }
    }

    goCurse(id: string) {
        this.router.navigate(['/curso', id]);
    };

    selectedCard(id: string) {
        this.router.navigate(['/photos', id]);
        console.log(id);
    };

    openwww(w: any, title: string, description: string, img: string) {
    //console.log(this.idnew,this.title,this.markdown,this.show,this.img);

        this.modal.open(w, { size: 'lg', scrollable: true })
        this.text=title;
        this.texto=description;
        this.textoimg=img;
    }

    open1(ww: any, idcurso: string, iduser: string) {
        this.modal.open(ww, { size: 'lg', scrollable: true })
        this.idcurso = idcurso;
        this.iduserteach = iduser;
    }

    open2(www: any, idnew: string, title: string, description: string, img: string, show: string) {
//console.log(this.idnew,this.title,this.markdown,this.show,this.img);

        this.modal.open(www, { size: 'lg', scrollable: false })
        this.idnew = idnew;
        this.titlewww = title;
        this.markdown = description;
        this.imgwww = img;
        this.showww = show;
    }


    integer(codeww: HTMLInputElement) {
        //console.log(codeww.value.length>=24)
        if (codeww.value.length==24 ) {
            this.CurseService.saveinteger(localStorage.getItem('id') || "", codeww.value, this.iduserteach)
                .subscribe(
                    (res:any) => {
                            this.loading = "false";
                        if(res.msgok){
                            console.log(res);
                            this.CurseService.getPhotosUser(localStorage.getItem('id') || "").subscribe(
                            (res: any) => {
                                this.integeruser = res;
                                console.log(res)
                                this.loading = "";

                                this.modal.dismissAll();
                            },
                            err => console.log(err)
                        )
                    }else{
                        alert(res.msg)
                        this.loading = "";

                    }


        this.getintegersuser();

                    },
                    err => console.log(err)
                );

            return false;
        } else {
            alert("Código incorrecto")
            return true;
        }
    };

    deleteinteger(id: string) {
        if (window.confirm('Desea salir del curso?')) {
            this.CurseService.deleteinteger(id)
                .subscribe(res => {
                    console.log(res);
                    this.CurseService.getPhotosUser(localStorage.getItem('id') || "").subscribe(
                (res: any) => {
                    this.integeruser = res;
                            this.getintegersuser();

                    console.log(res)
                },
                err => console.log(err)
            )
                });

        }
    };

    createnews() {
            this.CurseService.newscreate(localStorage.getItem('id') || "")
                .subscribe(res => {
                    console.log(res);
                    this.getnews();
                });

    };

    updatenews(title: HTMLInputElement, description: HTMLTextAreaElement, show: HTMLInputElement ) {
            this.CurseService.newsupdate(this.idnew, title.value, description.value, show.value, this.archivos[0])
                .subscribe((res: any)  => {
                  this.loading = "false";
                  this.value = Math.round((100 / res.total) * res.loaded);
                  console.log(res.total);
                  console.log(res.loaded);
                  if (res.total == res.loaded && res.type > 0) {
//                         this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                    this.modal.dismissAll();
                    //console.log(res);
                    //this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                    this.getnews();
                    this.loading = "";
                    this._value=0;
                    this.name="";
                    this.archivos = [];//resetea la matriz a rango 1
                    //this.photoSelected= [];
                  }
                });
                return false;
    };

    deletenews(idnew:string) {
            this.CurseService.newsdelete(idnew)
                .subscribe(res => {
                    console.log(res);
                    this.getnews();
                });

    };

    newsemergent(idnew:string, show:string) {
            this.CurseService.showhidenews(idnew, show)
                .subscribe(res => {
                    console.log(res);
                    this.getnews();
                });

    };


    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.photointeger, event.previousIndex, event.currentIndex);
    }
}
