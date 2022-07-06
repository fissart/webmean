import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
ng g c componente1_MV
ng g c componente2_RH
ng g c componente3_L-AUTORIDADES
ng g c componente4_L-ADMINISTRATIVOS
ng g c componente5_L-CONSEJOESTUDIANTIL
ng g c componente6_EDUCACION
ng g c componente7_AP-P
ng g c componente8_AP-G
ng g c componente9_AP-E
ng g c componente10_TESIS
ng g c componente11_BIBLIOTECA
ng g c componente12_ADMISION
ng g c componente13_PRE
ng g c componente14_STD
ng g c componente15_EGRESADOS
ng g c componente16_EVENTOS
ng g c componente17_DOCUMENTOS
ng g c componente18_ORGANIGRAMA
ng g c componente19_CRONOGRAMA
ng g c componente21_RECLAMOS
ng g c componente22_PREGUNTAS
ng g c componente23_MESADEPARTES
ng g c componente24_HORARY
ng g c componente25_SILABOS
ng g c componente26_NOTAS

ng g s 1_MV
ng g s 2_RH
ng g s 3_L-AUTORIDADES
ng g s 4_L-ADMINISTRATIVOS
ng g s 5_L-CONSEJOESTUDIANTIL
ng g s 6_EDUCACION
ng g s 7_AP-P
ng g s 8_AP-G
ng g s 9_AP-E
ng g s 10_TESIS
ng g s 11_BIBLIOTECA
ng g s 12_ADMISION
ng g s 13_PRE
ng g s 14_STD
ng g s 15_EGRESADOS
ng g s 16_EVENTOS
ng g s 17_DOCUMENTOS
ng g s 18_ORGANIGRAMA
ng g s 19_CRONOGRAMA
ng g s 21_RECLAMOS
ng g s 22_PREGUNTAS
ng g s 23_MESADEPARTES
ng g s 24_HORARY
ng g s 25_SILABOS
ng g s 26_NOTAS



ng g s 1_MV
ng g s 2_RH
ng g s 3_L-AUTORIDADES
ng g s 4_L-ADMINISTRATIVOS
ng g s 5_L-CONSEJOESTUDIANTIL
ng g s 6_EDUCACION
ng g s 7_AP-P
ng g s 8_AP-G
ng g s 9_AP-E
ng g s 10_TESIS
ng g s 11_BIBLIOTECA
ng g s 12_ADMISION
ng g s 13_PRE
ng g s 14_STD
ng g s 15_EGRESADOS
ng g s 16_EVENTOS
ng g s 17_DOCUMENTOS
ng g s 18_ORGANIGRAMA
ng g s 19_CRONOGRAMA
ng g s 21_RECLAMOS
ng g s 22_PREGUNTAS
ng g s 23_MESADEPARTES
ng g s 24_HORARY
ng g s 25_SILABOS
ng g s 26_NOTAS

ng g s 1_MV
ng g s 2_RH
ng g s 3_L-AUTORIDADES
ng g s 4_L-ADMINISTRATIVOS
ng g s 5_L-CONSEJOESTUDIANTIL
ng g s 6_EDUCACION
ng g s 7_AP-P
ng g s 8_AP-G
ng g s 9_AP-E
ng g s 10_TESIS
ng g s 11_BIBLIOTECA
ng g s 12_ADMISION
ng g s 13_PRE
ng g s 14_STD
ng g s 15_EGRESADOS
ng g s 16_EVENTOS
ng g s 17_DOCUMENTOS
ng g s 18_ORGANIGRAMA
ng g s 19_CRONOGRAMA
ng g s 21_RECLAMOS
ng g s 22_PREGUNTAS
ng g s 23_MESADEPARTES
ng g s 24_HORARY
ng g s 25_SILABOS
ng g s 26_NOTAS

echo w> 1_RH
*/
