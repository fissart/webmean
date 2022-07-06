import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosListComponent } from './components/cmpt1-land/photos-list.component'
import { LoginComponent } from './components/cmpt5-login/login.component';
import { PhotoPreviewComponent } from './components/cmpt7-curse-preview/curse-preview.component'
import { UserPreviewComponent } from './components/cmpt4-user-preview/user-preview.component';
import { UserComponent } from './components/cmpt3-user-register/user.component';
import { LandComponent } from "./components/cmpt2-users/land.component";
import { AsignatureComponent } from "./components/cmpt6-curse/asignature.component";
import { TasksComponent } from "./components/cmpt11-tasks/tasks.component";

import { ThemePreviewComponent } from './components/cmpt10-theme-preview/theme-preview.component'
import { UnityPreviewComponent } from './components/cmpt9-unity-preview/unity-preview.component'
import { TaskPreviewComponent } from './components/cmpt12-task-preview/task-preview.component'
import { UsersCurseComponent } from './components/cmpt8-integer/integer.component'
import { FileComponent } from './components/cmpt13-file/file.component'

import { Cmpt14MVComponent } from './components/cmpt14-mv/cmpt14-mv.component';
import { Cmpt15RHComponent } from './components/cmpt15-rh/cmpt15-rh.component';
import { Cmpt16AUTORIDADESComponent } from './components/cmpt16-autoridades/cmpt16-autoridades.component';
import { Cmpt17ADMINISTRATIVOSComponent } from './components/cmpt17-administrativos/cmpt17-administrativos.component';
import { Cmpt18CONSEJOESTUDIANTILComponent } from './components/cmpt18-consejoestudiantil/cmpt18-consejoestudiantil.component';
import { Cmpt19EDUCACIONComponent } from './components/cmpt19-educacion/cmpt19-educacion.component';
import { Cmpt21APGComponent } from './components/cmpt21-ap-g/cmpt21-ap-g.component';
import { Cmpt20APPComponent } from './components/cmpt20-ap-p/cmpt20-ap-p.component';
import { Cmpt22APEComponent } from './components/cmpt22-ap-e/cmpt22-ap-e.component';
import { Cmpt23TESISComponent } from './components/cmpt23-tesis/cmpt23-tesis.component';
import { Cmpt24BIBLIOTECAComponent } from './components/cmpt24-biblioteca/cmpt24-biblioteca.component';
import { Cmpt25ADMISIONComponent } from './components/cmpt25-admision/cmpt25-admision.component';
import { Cmpt26PREComponent } from './components/cmpt26-pre/cmpt26-pre.component';
import { Cmpt27STDComponent } from './components/cmpt27-std/cmpt27-std.component';
import { Cmpt28EGRESADOSComponent } from './components/cmpt28-egresados/cmpt28-egresados.component';
import { Cmpt29EVENTOSComponent } from './components/cmpt29-eventos/cmpt29-eventos.component';
import { Cmpt30DOCUMENTOSComponent } from './components/cmpt30-documentos/cmpt30-documentos.component';
import { Cmpt31ORGANIGRAMAComponent } from './components/cmpt31-organigrama/cmpt31-organigrama.component';
import { Cmpt32CRONOGRAMAComponent } from './components/cmpt32-cronograma/cmpt32-cronograma.component';
import { Cmpt33RECLAMOSComponent } from './components/cmpt33-reclamos/cmpt33-reclamos.component';
import { Cmpt34PREGUNTASComponent } from './components/cmpt34-preguntas/cmpt34-preguntas.component';
import { Cmpt35MESADEPARTESComponent } from './components/cmpt35-mesadepartes/cmpt35-mesadepartes.component';
import { Cmpt36HORARYComponent } from './components/cmpt36-horary/cmpt36-horary.component';
import { Cmpt37SILABOSComponent } from './components/cmpt37-silabos/cmpt37-silabos.component';
import { Cmpt38NOTASComponent } from './components/cmpt38-notas/cmpt38-notas.component';


const routes: Routes = [
  { path: 'Cmpt14MVComponent', component: Cmpt14MVComponent },
  { path: 'Cmpt15RHComponent', component: Cmpt15RHComponent },
  { path: 'Cmpt16AUTORIDADESComponent', component: Cmpt16AUTORIDADESComponent },
  { path: 'Cmpt17ADMINISTRATIVOSComponent', component: Cmpt17ADMINISTRATIVOSComponent },
  { path: 'Cmpt18CONSEJOESTUDIANTILComponent', component: Cmpt18CONSEJOESTUDIANTILComponent },
  { path: 'Cmpt19EDUCACIONComponent', component: Cmpt19EDUCACIONComponent },
  { path: 'Cmpt21APGComponent', component: Cmpt21APGComponent },
  { path: 'Cmpt20APPComponent', component: Cmpt20APPComponent },
  { path: 'Cmpt22APEComponent', component: Cmpt22APEComponent },
  { path: 'Cmpt23TESISComponent', component: Cmpt23TESISComponent },
  { path: 'Cmpt24BIBLIOTECAComponent', component: Cmpt24BIBLIOTECAComponent },
  { path: 'Cmpt25ADMISIONComponent', component: Cmpt25ADMISIONComponent },
  { path: 'Cmpt26PREComponent', component: Cmpt26PREComponent },
  { path: 'Cmpt27STDComponent', component: Cmpt27STDComponent },
  { path: 'Cmpt28EGRESADOSComponent', component: Cmpt28EGRESADOSComponent },
  { path: 'Cmpt29EVENTOSComponent', component: Cmpt29EVENTOSComponent },
  { path: 'Cmpt30DOCUMENTOSComponent', component: Cmpt30DOCUMENTOSComponent },
  { path: 'Cmpt31ORGANIGRAMAComponent', component: Cmpt31ORGANIGRAMAComponent },
  { path: 'Cmpt32CRONOGRAMAComponent', component: Cmpt32CRONOGRAMAComponent },
  { path: 'Cmpt33RECLAMOSComponent', component: Cmpt33RECLAMOSComponent },
  { path: 'Cmpt34PREGUNTASComponent', component: Cmpt34PREGUNTASComponent },
  { path: 'Cmpt35MESADEPARTESComponent', component: Cmpt35MESADEPARTESComponent },
  { path: 'Cmpt36HORARYComponent', component: Cmpt36HORARYComponent },
  { path: 'Cmpt37SILABOSComponent', component: Cmpt37SILABOSComponent },
  { path: 'Cmpt38NOTASComponent', component: Cmpt38NOTASComponent },
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
