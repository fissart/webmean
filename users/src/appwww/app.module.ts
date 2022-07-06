import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { KatexModule } from 'ng-katex';
//import { MarkdownModule } from 'ngx-markdown';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoFormComponent } from './components/asignature-form/asignature-form.component';
import { PhotoPreviewComponent } from './components/curse-preview/curse-preview.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { LandComponent } from "./components/landscape/land.component";


import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsignatureComponent } from './components/asignature/asignature.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { TasksComponent } from './components/tasks/tasks.component';
import { SwiperModule } from 'swiper/angular';
//import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
//import { YouTubePlayerModule } from "@angular/youtube-player";
import { NgxHeadroomModule } from 'ngx-headroom';
import {MatIconModule} from '@angular/material/icon';
import { UnityPreviewComponent } from './components/unity-preview/unity-preview.component';
import { ThemePreviewComponent } from './components/theme-preview/theme-preview.component';
import { ThemesComponent } from './components/themes/themes.component';
import { NgxDocViewerModule } from "ngx-doc-viewer";
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TaskPreviewComponent } from './components/task-preview/task-preview.component';
import { UsersCurseComponent } from './components/integer/integer.component';
import { FileComponent } from './components/file/file.component';
import { Componente1RHComponent } from './components/componente1-rh/componente1-rh.component';
import { Componente2LPAUTORIDADESComponent } from './components/componente2-lp-autoridades/componente2-lp-autoridades.component';
//import { NgxMarkdownItModule } from "ngx-markdown-it";
//import { NgxMarkdownItConfig } from "ngx-markdown-it";

//import { default as markmapPlugin } from 'markdown-it-markmap';
@NgModule({
	declarations: [
		AppComponent,
        ThemesComponent,
		NavigationComponent,
		PhotosListComponent,
		LandComponent,
		LoginComponent,
		UserComponent,
		PhotoFormComponent,
		PhotoPreviewComponent,
		UserPreviewComponent,
		AsignatureComponent,
		TasksComponent,
  UnityPreviewComponent,
  ThemePreviewComponent,
  TaskPreviewComponent,
  UsersCurseComponent,
  FileComponent,
  Componente1RHComponent,
  Componente2LPAUTORIDADESComponent,
  	],
	imports: [
		BrowserModule,
		NgxDocViewerModule,
		FormsModule,
		AppRoutingModule,
		CommonModule,
		DragDropModule,
		NgbModule,
		KatexModule,
        SwiperModule,
        //NgxHideOnScrollModule,
		HttpClientModule,
        MatIconModule,
        //YouTubePlayerModule,
        NgxHeadroomModule,
		//MarkdownModule.forRoot(),
		//NgxMarkdownItModule.forRoot(
			//{
		 //plugins: [
		//	 markmapPlugin
		 //]
	 //}
 //),
		MatProgressBarModule,
		BrowserAnimationsModule,
        NgxExtendedPdfViewerModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
