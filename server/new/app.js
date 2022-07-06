"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const _1_new_route_1 = __importDefault(require("./3.routes/1_new.route"));
const _1_users_route_1 = __importDefault(require("./3.routes/1_users.route"));
const _2_curses_route_1 = __importDefault(require("./3.routes/2_curses.route"));
const _3_sections_route_1 = __importDefault(require("./3.routes/3_sections.route"));
const _4_themes_route_1 = __importDefault(require("./3.routes/4_themes.route"));
const _5_task_route_1 = __importDefault(require("./3.routes/5_task.route"));
const _6_integer_route_1 = __importDefault(require("./3.routes/6_integer.route"));
const _7_MV_route_1 = __importDefault(require("./3.routes/7_MV.route"));
const _8_RH_route_1 = __importDefault(require("./3.routes/8_RH.route"));
const _9_AUTORIDADES_route_1 = __importDefault(require("./3.routes/9_AUTORIDADES.route"));
const _10_ADMINISTRATIVOS_route_1 = __importDefault(require("./3.routes/10_ADMINISTRATIVOS.route"));
const _11_CONSEJOESTUDIANTIL_route_1 = __importDefault(require("./3.routes/11_CONSEJOESTUDIANTIL.route"));
const _12_EDUCACION_route_1 = __importDefault(require("./3.routes/12_EDUCACION.route"));
const _13_AP_P_route_1 = __importDefault(require("./3.routes/13_AP-P.route"));
const _14_AP_G_route_1 = __importDefault(require("./3.routes/14_AP-G.route"));
const _15_AP_E_route_1 = __importDefault(require("./3.routes/15_AP-E.route"));
const _16_TESIS_route_1 = __importDefault(require("./3.routes/16_TESIS.route"));
const _17_BIBLIOTECA_route_1 = __importDefault(require("./3.routes/17_BIBLIOTECA.route"));
const _18_ADMISION_route_1 = __importDefault(require("./3.routes/18_ADMISION.route"));
const _19_PRE_route_1 = __importDefault(require("./3.routes/19_PRE.route"));
const _20_STD_route_1 = __importDefault(require("./3.routes/20_STD.route"));
const _21_EGRESADOS_route_1 = __importDefault(require("./3.routes/21_EGRESADOS.route"));
const _22_EVENTOS_route_1 = __importDefault(require("./3.routes/22_EVENTOS.route"));
const _23_DOCUMENTOS_route_1 = __importDefault(require("./3.routes/23_DOCUMENTOS.route"));
const _24_ORGANIGRAMA_route_1 = __importDefault(require("./3.routes/24_ORGANIGRAMA.route"));
const _25_CRONOGRAMA_route_1 = __importDefault(require("./3.routes/25_CRONOGRAMA.route"));
const _26_RECLAMOS_route_1 = __importDefault(require("./3.routes/26_RECLAMOS.route"));
const _27_PREGUNTAS_route_1 = __importDefault(require("./3.routes/27_PREGUNTAS.route"));
const _28_MESADEPARTES_route_1 = __importDefault(require("./3.routes/28_MESADEPARTES.route"));
const _29_HORARY_route_1 = __importDefault(require("./3.routes/29_HORARY.route"));
const _30_SILABOS_route_1 = __importDefault(require("./3.routes/30_SILABOS.route"));
const _31_NOTAS_route_1 = __importDefault(require("./3.routes/31_NOTAS.route"));
//import RESPONCE from './3.routes/32_RESPONCE.route'
// Initializations
const app = (0, express_1.default)();
// Settings
app.set('port', process.env.PORT || 8000);
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/news", _1_new_route_1.default);
app.use('/api/users', _1_users_route_1.default); //usuarios unicamente
app.use("/api/curses", _2_curses_route_1.default);
app.use("/api/sections", _3_sections_route_1.default);
app.use("/api/themes", _4_themes_route_1.default);
app.use("/api/task", _5_task_route_1.default);
app.use("/api/integer", _6_integer_route_1.default);
app.use("/api/MV", _7_MV_route_1.default);
app.use("/api/RH", _8_RH_route_1.default);
app.use("/api/AUTORIDADES", _9_AUTORIDADES_route_1.default);
app.use("/api/ADMINISTRATIVOS", _10_ADMINISTRATIVOS_route_1.default);
app.use("/api/CONSEJOESTUDIANTIL", _11_CONSEJOESTUDIANTIL_route_1.default);
app.use("/api/EDUCACION", _12_EDUCACION_route_1.default);
app.use("/api/APp", _13_AP_P_route_1.default);
app.use("/api/APg", _14_AP_G_route_1.default);
app.use("/api/APe", _15_AP_E_route_1.default);
app.use("/api/TESIS", _16_TESIS_route_1.default);
app.use("/api/BIBLIOTECA", _17_BIBLIOTECA_route_1.default);
app.use("/api/ADMISION", _18_ADMISION_route_1.default);
app.use("/api/PRE", _19_PRE_route_1.default);
app.use("/api/STD", _20_STD_route_1.default);
app.use("/api/EGRESADOS", _21_EGRESADOS_route_1.default);
app.use("/api/EVENTOS", _22_EVENTOS_route_1.default);
app.use("/api/DOCUMENTOS", _23_DOCUMENTOS_route_1.default);
app.use("/api/ORGANIGRAMA", _24_ORGANIGRAMA_route_1.default);
app.use("/api/CRONOGRAMA", _25_CRONOGRAMA_route_1.default);
app.use("/api/RECLAMOS", _26_RECLAMOS_route_1.default);
app.use("/api/PREGUNTAS", _27_PREGUNTAS_route_1.default);
app.use("/api/MESADEPARTES", _28_MESADEPARTES_route_1.default);
app.use("/api/HORARY", _29_HORARY_route_1.default);
app.use("/api/SILABOS", _30_SILABOS_route_1.default);
app.use("/api/NOTAS", _31_NOTAS_route_1.default);
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
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
