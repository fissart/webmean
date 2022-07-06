import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosListComponent } from './components/photos-list/photos-list.component'
import { LoginComponent } from './components/login/login.component';
import { PhotoFormComponent } from './components/asignature-form/asignature-form.component'
import { PhotoPreviewComponent } from './components/curse-preview/curse-preview.component'
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { UserComponent } from './components/user/user.component';
import { LandComponent } from "./components/landscape/land.component";
import { AsignatureComponent } from "./components/asignature/asignature.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { ThemesComponent } from "./components/themes/themes.component";

import { ThemePreviewComponent } from './components/theme-preview/theme-preview.component'
import { UnityPreviewComponent } from './components/unity-preview/unity-preview.component'
import { TaskPreviewComponent } from './components/task-preview/task-preview.component'
import { UsersCurseComponent } from './components/integer/integer.component'
import { FileComponent } from './components/file/file.component'



const routes: Routes = [

  {
    path: 'themes',
    component: ThemesComponent
  },
  {
    path: 'file/:iduser',
    component: FileComponent
  },
    {
    path: 'curso/:idcurso',
    component: AsignatureComponent
  },
      {
    path: 'integers/:idcurso',
    component: UsersCurseComponent
  },
{
        path:'task/:idtask',
        component: TaskPreviewComponent
},
{
    path: 'theme/:idtheme',
    component: ThemePreviewComponent
},
    {
    path: 'unity/:idunity',
    component: UnityPreviewComponent
  },
  {
    path: 'tema/:idtheme/:idunity',
    component: TasksComponent
  },

  {
    path: 'user/:id',
    component: UserPreviewComponent
  },
  {
    path: 'user',
    component: LandComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'registro',
    component: UserComponent
  },
  /*
  */
  {
    path: 'cursoup/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    component: PhotosListComponent
  },
  /*
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
