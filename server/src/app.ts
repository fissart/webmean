import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

import news from './3.routes/1_new.route'
import user from './3.routes/1_users.route'
import curse from './3.routes/2_curses.route'
import section from './3.routes/3_sections.route'
import theme from './3.routes/4_themes.route'
import task from './3.routes/5_task.route'
import integer from './3.routes/6_integer.route'


import MV from './3.routes/7_MV.route'
import RH from './3.routes/8_RH.route'
import AUTORIDADES from './3.routes/9_AUTORIDADES.route'
import ADMINISTRATIVOS from './3.routes/10_ADMINISTRATIVOS.route'
import CONSEJOESTUDIANTIL from './3.routes/11_CONSEJOESTUDIANTIL.route'
import EDUCACION from './3.routes/12_EDUCACION.route'
import APp from './3.routes/13_AP-P.route'
import APg from './3.routes/14_AP-G.route'
import APe from './3.routes/15_AP-E.route'
import TESIS from './3.routes/16_TESIS.route'
import BIBLIOTECA from './3.routes/17_BIBLIOTECA.route'
import ADMISION from './3.routes/18_ADMISION.route'
import PRE from './3.routes/19_PRE.route'
import STD from './3.routes/20_STD.route'
import EGRESADOS from './3.routes/21_EGRESADOS.route'
import EVENTOS from './3.routes/22_EVENTOS.route'
import DOCUMENTOS from './3.routes/23_DOCUMENTOS.route'
import ORGANIGRAMA from './3.routes/24_ORGANIGRAMA.route'
import CRONOGRAMA from './3.routes/25_CRONOGRAMA.route'
import RECLAMOS from './3.routes/26_RECLAMOS.route'
import PREGUNTAS from './3.routes/27_PREGUNTAS.route'
import MESADEPARTES from './3.routes/28_MESADEPARTES.route'
import HORARY from './3.routes/29_HORARY.route'
import SILABOS from './3.routes/30_SILABOS.route'
import NOTAS from './3.routes/31_NOTAS.route'
//import RESPONCE from './3.routes/32_RESPONCE.route'

// Initializations
const app: Application = express();
// Settings
app.set('port', process.env.PORT || 8000);
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/news", news);
app.use('/api/users', user);//usuarios unicamente
app.use("/api/curses", curse);
app.use("/api/sections", section);
app.use("/api/themes", theme);
app.use("/api/task", task);
app.use("/api/integer", integer);

app.use("/api/MV", MV);
app.use("/api/RH", RH);
app.use("/api/AUTORIDADES", AUTORIDADES);
app.use("/api/ADMINISTRATIVOS", ADMINISTRATIVOS);
app.use("/api/CONSEJOESTUDIANTIL", CONSEJOESTUDIANTIL);
app.use("/api/EDUCACION", EDUCACION);
app.use("/api/APp", APp);
app.use("/api/APg", APg);
app.use("/api/APe", APe);
app.use("/api/TESIS", TESIS);
app.use("/api/BIBLIOTECA", BIBLIOTECA);
app.use("/api/ADMISION", ADMISION);
app.use("/api/PRE", PRE);
app.use("/api/STD", STD);
app.use("/api/EGRESADOS", EGRESADOS);
app.use("/api/EVENTOS", EVENTOS);
app.use("/api/DOCUMENTOS", DOCUMENTOS);
app.use("/api/ORGANIGRAMA", ORGANIGRAMA);
app.use("/api/CRONOGRAMA", CRONOGRAMA);
app.use("/api/RECLAMOS", RECLAMOS);
app.use("/api/PREGUNTAS", PREGUNTAS);
app.use("/api/MESADEPARTES", MESADEPARTES);
app.use("/api/HORARY", HORARY);
app.use("/api/SILABOS", SILABOS);
app.use("/api/NOTAS", NOTAS);
//app.use("/api/RESPONCE", RESPONCE);

/*
app.use("/api/categories", require("./routes/category.route"));
app.use("/api/curses", require("./routes/curse.route"));
app.use("/api/chapters", require("./routes/chapter.route"));
app.use("/api/seccions", require("./routes/seccion.route"));
app.use("/api/tasks", require("./routes/task.route"));
app.use("/api/comments", require("./routes/comment.route"));
app.use("/api/mycurses", require("./routes/mycurse.route"));
app.use("/api/tests", require("./routes/test.route"));
app.use("/api/links", require("./routes/link.route"));
*/

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
