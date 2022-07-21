// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  title: 'Local Environment Heading',
  //apiURL: 'http://localhost:8000'
  apiURL:  'http://169.197.183.189:8000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/*
//Insertar nuevas collecciones
db.wwws.insertMany(
[
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},
	{name:"75869653",email: "75869653@fractal.cf", password:"75869653",rol:"3",foto:"")},

	const zzw=[
	'40787801',
	'48485795',
	'70788957',
	'46154024',
	'70842779',
	'46289117',
	'74029638',
	'28287730',
	'47706095',
	'45907252',
	'21576419',
	'70772937',
	'01286556',
	'70161107',
	'47303800',
	'70197716',
	'28310675',
	'40928433',
	'42472995',
	'09653974',
	'43990368',
	'45457889',
	'77677644',
	'70057888',
	'44065180',
	'46487613',
	'71495379',
	'70120533',
	'44459950',
	'41350273',
	'74159592',
	'48329799',
	'70092037',
	'70651371',
	'70418763',
	'09357466',
	'46432093',*
	'43469769',
	'28287730',
	'45841300',
	'77681312'
	]

 db.users.find({password:{$in:zzw }},{_id:1}).pretty() //solo _id.

{ "_id" : ObjectId("6270a11f07fdcb5c093870e7") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870e8") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870e9") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ea") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870eb") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ec") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ed") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ee") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ef") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f0") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f1") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f2") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f3") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f4") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f5") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f6") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f7") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f8") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870f9") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870fa") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870fb") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870fc") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870fd") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870fe") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ff") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387100") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387101") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387102") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387103") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387104") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387105") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387106") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387107") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387108") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387109") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938710a") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938710b") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938710c") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938710d") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938710e") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938710f") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711b") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387135") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387148") }

db.integers.insertMany(
[
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870e7"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870e8"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870e9"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870ea"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870eb"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870ec"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870ed"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870ee"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870ef"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f0"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f1"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f2"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f3"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f4"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f5"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f6"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f7"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f8"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870f9"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870fa"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870fb"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870fc"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870fd"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870fe"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c093870ff"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387100"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387101"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387102"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387103"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387104"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387105"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387106"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387107"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387108"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387109"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938710a"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938710b"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938710c"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938710d"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938710e"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938710f"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c0938711b"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387135"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a15f64b8ba3f004ef6b8"),"user" : ObjectId("6270a11f07fdcb5c09387148"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") }
],
)

ObjectId("626afc4b7ec2203f986a6e9c"),
 ObjectId("626afbc0a238f844b36556f6"),

 theme  ObjectId("626b12287ec2203f986a6fd3"),
 unidad
 ObjectId("626b0a1e7ec2203f986a6f7e"),
ObjectId("626b0a1e7ec2203f986a6f7e"),


"note" : "",
        "task" : "",
        "theme" : ObjectId("626b12287ec2203f986a6fd3"),
        "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),
        "curse" : ObjectId("62547daffb7bf81e6ccb3d60"),
        "user" : ObjectId("62547b6cfb7bf81e6ccb3d3e"),

 db.tasks.insertMany(
[
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556f8")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556f9")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556fa")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556fb")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556fc")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556fd")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556fe")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b36556ff")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655700")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655701")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655702")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655703")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655704")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655705")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655706")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655707")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655708")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655709")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365570a")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365570b")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365570c")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365570d")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365570e")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365570f")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655710")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655711")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655712")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655713")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655714")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655715")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655716")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655717")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655718")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655719")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365571a")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365571b")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365571c")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365571d")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365571e")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365571f")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655720")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b365572c")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655746")},
{"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"),curse: ObjectId("626afc4b7ec2203f986a6e9c"), "user" : ObjectId("626afbc0a238f844b3655759")}
],
)


"note" : "",
        "task" : "",
        "theme" : ObjectId("625b0e5f71a80c0a18c6e0c5"),
        "unidad" : ObjectId("625493520382c6086c435d72"),
        "curse" : ObjectId("62547daffb7bf81e6ccb3d60"),
        "user" : ObjectId("62547b6cfb7bf81e6ccb3d3e"),


const w = [
	"71596957",
"70905181",
"77434743",
"48333242",
"60586750",
"46281909",
"74310534",
"70430814",
"70410774",
"70425591",
"70428120",
"70788957",
"71814472",
"74841760",
"61421637",
"70157180",
"70662911",
"74356961",
"70462499",
"71290314",
"46710518",
"71286278",
"72637400",
"76260769",
"28289824",
"46316469",
"74136615",
"73665449",
"70107902",
"74162741",
"74244547",
"72267564",
"71749395",
"70417748",
"76857195",
"72946139",
"71140831",
"74029638",
"70579049",
"73617774",
"72947706",
"72009675",
"70665973",
"72210845"
]
 db.users.find({password:{$in:w }},{_id:1}).pretty() //solo _id.


{ "_id" : ObjectId("6270a11f07fdcb5c093870e9") }
{ "_id" : ObjectId("6270a11f07fdcb5c093870ed") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387110") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387111") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387112") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387113") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387114") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387115") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387116") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387117") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387118") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387119") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711a") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711b") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711c") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711d") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711e") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938711f") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387120") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387121") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387122") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387123") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387124") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387125") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387126") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387127") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387128") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387129") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938712a") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938712b") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938712c") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938712d") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938712e") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938712f") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387130") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387131") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387132") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387133") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387134") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387135") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387136") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387137") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387138") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387139") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938713a") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938713b") }


curse  ObjectId("626afc6d7ec2203f986a6eb6"),
user  ObjectId("626afbc0a238f844b36556f6"),


"note" : "", "task" : "", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), "curse" : ObjectId("62547daffb7bf81e6ccb3d60"),

db.integers.insertMany(
    [
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c093870e9"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c093870ed"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387110"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387111"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387112"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387113"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387114"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387115"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387116"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387117"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387118"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387119"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938711a"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938711b"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938711c"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938711d"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938711e"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938711f"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387120"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387121"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387122"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387123"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387124"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387125"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387126"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387127"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387128"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387129"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938712a"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938712b"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938712c"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938712d"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938712e"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938712f"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387130"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387131"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387132"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387133"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387134"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387135"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387136"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387137"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387138"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c09387139"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938713a"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") },
{ "curse" : ObjectId("6270a16164b8ba3f004ef6be"),"user" : ObjectId("6270a11f07fdcb5c0938713b"),"userteach" : ObjectId("6270a11f07fdcb5c093870e5") }
	],
)



db.tasks.insertMany(
    [
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b36556fa")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b36556fe")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655721")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655722")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655723")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655724")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655725")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655726")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655727")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655728")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655729")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365572a")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365572b")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365572c")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365572d")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365572e")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365572f")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655730")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655731")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655732")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655733")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655734")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655735")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655736")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655737")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655738")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655739")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365573a")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365573b")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365573c")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365573d")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365573e")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365573f")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655740")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655741")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655742")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655743")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655744")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655745")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655746")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655747")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655748")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b3655749")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365574a")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365574b")},
{"note" : "", "task" : "tarea entregada", "theme" : ObjectId("626b12287ec2203f986a6fd3"), "unidad" : ObjectId("626b0a1e7ec2203f986a6f7e"), curse: ObjectId("626afc6d7ec2203f986a6eb6"), "user" : ObjectId("626afbc0a238f844b365574c")}
],
)


const ww=[
	"73745914",
"70410731",
"75373260",
"70428206",
"99999999",
"70665879",
"70428118",
"70412211",
"70412210",
"73883606",
"76046040",
"76176636",
"42472995",
"76006111",
"48669613",
"70930761",
"75756864",
"76046118",
"62604963",
"75246142",
"75007765",
"73978364",
"70793029",
"77015493",
"80652629",
"71328194",
"72210842",
"70416624",
"70654608",
"70447686",
"70426839",
"28216870",
"61335183",
"77693767",
"70397679",
"70046352",
"77495816",
"70426442",
"75940572",
"70139121",
"70454187",
"45020829",
"70214394",
"70844985",
"75360387"
]


{ "_id" : ObjectId("6270a11f07fdcb5c093870f9") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938713c") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938713d") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938713e") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938713f") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387140") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387141") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387142") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387143") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387144") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387145") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387146") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387147") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387148") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387149") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938714a") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938714b") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938714c") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938714d") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938714e") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938714f") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387150") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387151") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387152") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387153") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387154") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387155") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387156") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387157") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387158") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387159") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938715a") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938715b") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938715c") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938715d") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938715e") }
{ "_id" : ObjectId("6270a11f07fdcb5c0938715f") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387160") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387161") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387162") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387163") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387164") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387165") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387166") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387167") }
{ "_id" : ObjectId("6270a11f07fdcb5c09387168") }

curse ObjectId("626afc6f7ec2203f986a6ebe"),
user  ObjectId("626afbc0a238f844b36556f6"),

db.integers.insertMany(
    [
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c093870f9"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938713c"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938713d"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938713e"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938713f"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387140"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387141"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387142"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387143"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387144"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387145"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387146"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387147"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387148"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387149"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938714a"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938714b"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938714c"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938714d"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938714e"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938714f"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387150"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387151"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387152"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387153"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387154"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387155"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387156"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387157"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387158"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387159"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938715a"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938715b"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938715c"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938715d"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938715e"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c0938715f"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387160"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387161"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387162"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387163"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387164"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387165"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387166"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387167"), userteach:ObjectId("6270a11f07fdcb5c093870e5")},
{curse:ObjectId("6270a16264b8ba3f004ef6c5"), "user" : ObjectId("6270a11f07fdcb5c09387168"), userteach:ObjectId("6270a11f07fdcb5c093870e5")}
],
)

db.users.insertMany(    [
{name:"Administrador", email: "w@w", password: "w", rol:"1", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Docente", email: "ww@w", password: "ww", rol:"2", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Eleno Jhony ESPINOZA PEÑA", email: "40787801@fismart.cf", password: "40787801", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Anali Edith yachapa palomino ", email: "48485795@fismart.cf", password: "48485795", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Cristofer Curo Marca ", email: "70788957@fismart.cf", password: "70788957", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Gladys Raquel Barrientos La Serna ", email: "46154024@fismart.cf", password: "46154024", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Luis ENRIQUEZ AYUQUE", email: "70842779@fismart.cf", password: "70842779", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Edith Gaby Ayala Quispe", email: "46289117@fismart.cf", password: "46289117", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Luz Clarita Sanchez Vargas ", email: "74029638@fismart.cf", password: "74029638", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Edwin Wiliam Cconislla Aramburú", email: "28287730@fismart.cf", password: "28287730", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HENRY PAÚL IMÁN CORONADO", email: "47706095@fismart.cf", password: "47706095", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Alex Richard Lope Flores ", email: "45907252@fismart.cf", password: "45907252", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Alfredo Gerolamo Uchuya Vizarreta ", email: "21576419@fismart.cf", password: "21576419", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Roy Ramiro, GÓMEZ HUAYNALAYA", email: "70772937@fismart.cf", password: "70772937", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LUIS CONDORI CHUCHI", email: "01286556@fismart.cf", password: "01286556", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Roxana Huayhua Peña", email: "70161107@fismart.cf", password: "70161107", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Elvis Arturo Carhuachuco Abad", email: "47303800@fismart.cf", password: "47303800", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Auccasi Palomino Fernando ", email: "70197716@fismart.cf", password: "70197716", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Martin guzman", email: "28310675@fismart.cf", password: "28310675", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"GLADYS MARGRETHE VILLANTOY HUAMÁN ", email: "40928433@fismart.cf", password: "40928433", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Wilber Huaytalla Ponce", email: "42472995@fismart.cf", password: "42472995", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Julio edwin leon perez", email: "09653974@fismart.cf", password: "09653974", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"TITO ORÉ CALLE ", email: "43990368@fismart.cf", password: "43990368", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"SANDRA MACHUCA HERMOZA", email: "45457889@fismart.cf", password: "45457889", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"antony adolfo, quispe tueros ", email: "77677644@fismart.cf", password: "77677644", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Ruth Karina Jaime Huamani ", email: "70057888@fismart.cf", password: "70057888", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Miguel Abad Muñoz Pumacahua ", email: "44065180@fismart.cf", password: "44065180", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Carolina Vilca Mendieta", email: "46487613@fismart.cf", password: "46487613", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"RODMAN RONALD VALENZUELA ORÉ", email: "71495379@fismart.cf", password: "71495379", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Percy valeriano Cárdenas Huamán ", email: "70120533@fismart.cf", password: "70120533", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Medalina QUISPE URBANO", email: "44459950@fismart.cf", password: "44459950", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Mario Orlando Luque Díaz ", email: "41350273@fismart.cf", password: "41350273", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LUZ CLARITA CARRION QUISPE", email: "74159592@fismart.cf", password: "74159592", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Franco Ruddy Bejar Vicaña", email: "48329799@fismart.cf", password: "48329799", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Alex Eleodoro Ochoa Roca", email: "70092037@fismart.cf", password: "70092037", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Yunior Martinez Cardenas", email: "70651371@fismart.cf", password: "70651371", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Manfred Laines Arcce", email: "70418763@fismart.cf", password: "70418763", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ROBERT ESCOLÁSTICO TORRE MALPARTIDA", email: "09357466@fismart.cf", password: "09357466", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Ronal José Blas Sosa", email: "46432093@fismart.cf", password: "46432093", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Roger Rolando Ramos Huachaca ", email: "43469769@fismart.cf", password: "43469769", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Edwin Wiliam Cconislla Aramburú", email: "28287730@fismart.cf", password: "28287730", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Epifanio Emerson, RAMÍREZ PERALES", email: "45841300@fismart.cf", password: "45841300", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"Dafne Verónica Blettia Guzmán Cuadros ", email: "77681312@fismart.cf", password: "77681312", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ALCARRAZ QUISPE, Whiny Anghel-", email: "71596957@fismart.cf", password: "71596957", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"APARICIO TAQUIRI, Carlos Sebastián", email: "70905181@fismart.cf", password: "70905181", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"BEJAR ASTO, Claudia Nicolle", email: "77434743@fismart.cf", password: "77434743", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"BERNAL ALDAZABAL, Erick Fidel", email: "48333242@fismart.cf", password: "48333242", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CAMARENA ORIUNDO, Jade Ariana Génesis", email: "60586750@fismart.cf", password: "60586750", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CAMPOS BERROCAL, David Luisin", email: "46281909@fismart.cf", password: "46281909", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CANCHO TUDELANO, Hebert Alex", email: "74310534@fismart.cf", password: "74310534", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CARHUAS LEÓN, Anderson Nestor", email: "70430814@fismart.cf", password: "70430814", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CARRERA GÁLVEZ, Joshua Adoniram", email: "70410774@fismart.cf", password: "70410774", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CARRERA GÁLVEZ, Zurisadai Lucero", email: "70425591@fismart.cf", password: "70425591", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CHINO ROJAS, Anais Zenaida", email: "70428120@fismart.cf", password: "70428120", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CURO MARCA, Cristofer", email: "70788957@fismart.cf", password: "70788957", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"DE LA CRUZ  VÁSQUEZ, Yulié Victor", email: "71814472@fismart.cf", password: "71814472", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"FLORES PORRAS, Flor Cristina", email: "74841760@fismart.cf", password: "74841760", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"GALLARDO PAREDES, Levy Mahel", email: "61421637@fismart.cf", password: "61421637", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"GUTIERREZ AYALA, Darlin Lucero", email: "70157180@fismart.cf", password: "70157180", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"GUTIERREZ GÓMEZ, Nelia Luz", email: "70662911@fismart.cf", password: "70662911", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HUAMAN QUIQUIN, Julio Luis", email: "74356961@fismart.cf", password: "74356961", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HUAMANI PALOMINO, Coraima Paola", email: "70462499@fismart.cf", password: "70462499", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HUARANCCA OCHOA, Rooss Jassmin", email: "71290314@fismart.cf", password: "71290314", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HUARSAYA VEGA, Alejandra", email: "46710518@fismart.cf", password: "46710518", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LABIO ESTRADA, Raúl Antony", email: "71286278@fismart.cf", password: "71286278", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LAURA PRADO, Renato Aldair", email: "72637400@fismart.cf", password: "72637400", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LOPEZ MEDRANO, Pedro Emiliano", email: "76260769@fismart.cf", password: "76260769", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LUNA MOLERO, Hugo Roberto", email: "28289824@fismart.cf", password: "28289824", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MARQUEZ SANCHEZ, Ivan Gustavo", email: "46316469@fismart.cf", password: "46316469", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MEZA PARIONA, Blanca Antonia", email: "74136615@fismart.cf", password: "74136615", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MORALES SABOYA, Alison Jhomayra", email: "73665449@fismart.cf", password: "73665449", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PALOMINO RODRIGUEZ, Mayumy Liz", email: "70107902@fismart.cf", password: "70107902", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PEÑA CCOLLCCA, Juan Carlos", email: "74162741@fismart.cf", password: "74162741", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PLATAS RODRIGUEZ, Jean Carlos", email: "74244547@fismart.cf", password: "74244547", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"POMA LLACCTA, Julio Cesar", email: "72267564@fismart.cf", password: "72267564", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"POZO ORTIZ, Yhenifer Mayleyny ", email: "71749395@fismart.cf", password: "71749395", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"QUINTO HINOSTROZA, Cristian Arius", email: "70417748@fismart.cf", password: "70417748", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"QUISPE RAMIREZ, Dandy Bebeto", email: "76857195@fismart.cf", password: "76857195", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"RIVERA RAMIREZ, Elver Teofilo", email: "72946139@fismart.cf", password: "72946139", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ROCA GARCIA, Katheryne Ruth", email: "71140831@fismart.cf", password: "71140831", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"SANCHEZ VARGAS, Luz Clarita", email: "74029638@fismart.cf", password: "74029638", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"TABOADA HUACCAN, Jhon Edison", email: "70579049@fismart.cf", password: "70579049", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VARGAS  MARTINEZ, Joel Jeanpierre", email: "73617774@fismart.cf", password: "73617774", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VEGA VERGARA, Katherine Kirstin", email: "72947706@fismart.cf", password: "72947706", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VENTURA CAMPOS, Deysi Julia", email: "72009675@fismart.cf", password: "72009675", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VILLANUEVA HUAMANI, Rafael Ivan", email: "70665973@fismart.cf", password: "70665973", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VILLAR TELLO, Loyda Válery", email: "72210845@fismart.cf", password: "72210845", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"AGUIRRE DIPAS, Jhonmir Jefry-", email: "73745914@fismart.cf", password: "73745914", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ALVIAR ROJAS, Jhoel", email: "70410731@fismart.cf", password: "70410731", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"AMIQUERO GONZALES, Sarai Naydither", email: "75373260@fismart.cf", password: "75373260", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CANCHARI ORTIZ, Brenda Anais", email: "70428206@fismart.cf", password: "70428206", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CANDIA MAGALLANES, Gian Marco", email: "99999999@fismart.cf", password: "99999999", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CARRASCO APCHO, Brigitte Natalie", email: "70665879@fismart.cf", password: "70665879", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CHINO ROJAS, Alisson Mireya", email: "70428118@fismart.cf", password: "70428118", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CORAS CARRERA, Cielo Dayana", email: "70412211@fismart.cf", password: "70412211", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"CORAS CARRERA, Steve Fernando", email: "70412210@fismart.cf", password: "70412210", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"DELGADO GUERRA, LUZ SANAY", email: "73883606@fismart.cf", password: "73883606", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ESPINO CURO, Eduardo", email: "76046040@fismart.cf", password: "76046040", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"GUILLEN ALMANZA, Ronald Deivi", email: "76176636@fismart.cf", password: "76176636", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HUAYTALLA PONCE, Wilber", email: "42472995@fismart.cf", password: "42472995", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MARTINEZ ARANA, Walter Willy", email: "76006111@fismart.cf", password: "76006111", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MORALES HUARACA,  Kevin Percy", email: "48669613@fismart.cf", password: "48669613", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MORALES RIVERA, Juan Carlos", email: "70930761@fismart.cf", password: "70930761", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MUNAYLLA MARTINEZ, Roger Paulino", email: "75756864@fismart.cf", password: "75756864", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ORÉ ZAPATA, Kenyi Santiago ", email: "76046118@fismart.cf", password: "76046118", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PRADO CASTILLO, Deysi Brigitte", email: "62604963@fismart.cf", password: "62604963", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"QUICHCA CANDIOTTI, Ani Yuliana", email: "75246142@fismart.cf", password: "75246142", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"QUISPE HERRERA, Orlando Anderson", email: "75007765@fismart.cf", password: "75007765", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"QUISPE PARIONA, David Cristhian", email: "73978364@fismart.cf", password: "73978364", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ROJAS QUISPE, Celso", email: "70793029@fismart.cf", password: "70793029", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"SALCEDO HUARCAYA, Ely Flor", email: "77015493@fismart.cf", password: "77015493", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"SULCA CARBAJAL, Ronald", email: "80652629@fismart.cf", password: "80652629", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"SULCA LAURENTE, Ungriela ", email: "71328194@fismart.cf", password: "71328194", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"TERRY PACHECO, Camila Coral", email: "72210842@fismart.cf", password: "72210842", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VILLANUEVA HUAYHUA, Luis guillermo", email: "70416624@fismart.cf", password: "70416624", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"YUPA HUAMAN, Franz Fray", email: "70654608@fismart.cf", password: "70654608", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"BARRIENTOS TUEROS, Yadir Edgar-", email: "70447686@fismart.cf", password: "70447686", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"BUSTAMANTE MENESES, Johan Brayhan", email: "70426839@fismart.cf", password: "70426839", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"GARCIA HUAYTA, Nelva Ruth", email: "28216870@fismart.cf", password: "28216870", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HINOSTROZA CANCHARI, Angel", email: "61335183@fismart.cf", password: "61335183", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"HUARCAYA PACOTAIPE, Jheral Fredy", email: "77693767@fismart.cf", password: "77693767", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LAGOS SOTO, Denisse Rosario", email: "70397679@fismart.cf", password: "70397679", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"LUJAN JANAMPA, Ana Lucero", email: "70046352@fismart.cf", password: "70046352", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"MENDOZA ESCALANTE, Nino Aldo", email: "77495816@fismart.cf", password: "77495816", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ORCON CUBA, Jhon Camilo", email: "70426442@fismart.cf", password: "70426442", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PALOMINO CÁRDENAS, Sofía Jade", email: "75940572@fismart.cf", password: "75940572", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PALOMINO QUISPE, Enma Flor", email: "70139121@fismart.cf", password: "70139121", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"PARIONA ROJAS, Mequias Misael", email: "70454187@fismart.cf", password: "70454187", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ROCA CURI, Leonardo Fabio", email: "45020829@fismart.cf", password: "45020829", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"TERRY PACHECO, Joaquin Augusto", email: "70214394@fismart.cf", password: "70214394", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"VASQUEZ GONZALES, Franklin", email: "70844985@fismart.cf", password: "70844985", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ZAMORA MUNAYLLA, Cody Nicoll", email: "75360387@fismart.cf", password: "75360387", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
],
)






lilianaylas@esfapa.edu.pe
rolandoquispeprado@esfapa.edu.pe
juanlicas@esfapa.edu.pe
mariamarquina@esfapa.edu.pe
evelinasanchez@esfapa.edu.pe
ezequielzarate@esfapa.edu.pe
ladislaoparra@esfapa.edu.pe
zenobiopalomino@esfapa.edu.pe
kennethmartinez@esfapa.edu.pe
belarminasolar@esfapa.edu.pe
santiagoquispe@esfapa.edu.pe
jesusprado@esfapa.edu.pe
amandacordova@esfapa.edu.pe
eleodoroalvarez@esfapa.edu.pe
luisariste@esfapa.edu.pe
constantinoccaico@esfapa.edu.pe
julioarones@esfapa.edu.pe
moisesanchahua@esfapa.edu.pe
nancyasto@esfapa.edu.pe
reynaldocabrera@esfapa.edu.pe
josecanchari@esfapa.edu.pe
juanchuchon@esfapa.edu.pe
olimpiacordero@esfapa.edu.pe
ricardomallqui@esfapa.edu.pe
labslovmiranda@esfapa.edu.pe
katiaoriundo@esfapa.edu.pe
reyderquispe@esfapa.edu.pe
williamrojas@esfapa.edu.pe
edgarsabastizagal@esfapa.edu.pe
richardsulca@esfapa.edu.pe
saulsulla@esfapa.edu.pe
roberttorre@esfapa.edu.pe
teofilotorres@esfapa.edu.pe
nancyviza@esfapa.edu.pe
edwincconislla@esfapa.edu.pe
rogerramos@esfapa.edu.pe
einerjauregui@esfapa.edu.pe
kattiaapcho@esfapa.edu.pe
willianhinostroza@esfapa.edu.pe
juanamorales@esfapa.edu.pe
isaiascconislla@esfapa.edu.pe
tomasenciso@esfapa.edu.pe
celedoniagutierrez@esfapa.edu.pe
mariopablo@esfapa.edu.pe
carlosoriundo@esfapa.edu.pe
davidmarmolejo@esfapa.edu.pe
machurtado@esfapa.edu.pe
fiorelaarones@esfapa.edu.pe
netypayala@esfapa.edu.pe

db.users.insertMany(    [
{name:"", email: "77540087@fismart.cf", password: "77540087", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "74196964@fismart.cf", password: "74196964", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "75781948@fismart.cf", password: "75781948", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "74564134@fismart.cf", password: "74564134", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "47534612@fismart.cf", password: "47534612", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "70547814@fismart.cf", password: "70547814", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"lilianaylas@esfapa.edu.pe", email: "lilianaylas@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"rolandoquispeprado@esfapa.edu.pe", email: "rolandoquispeprado@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"juanlicas@esfapa.edu.pe", email: "juanlicas@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"mariamarquina@esfapa.edu.pe", email: "mariamarquina@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"evelinasanchez@esfapa.edu.pe", email: "evelinasanchez@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ezequielzarate@esfapa.edu.pe", email: "ezequielzarate@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ladislaoparra@esfapa.edu.pe", email: "ladislaoparra@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"zenobiopalomino@esfapa.edu.pe", email: "zenobiopalomino@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"kennethmartinez@esfapa.edu.pe", email: "kennethmartinez@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"belarminasolar@esfapa.edu.pe", email: "belarminasolar@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"santiagoquispe@esfapa.edu.pe", email: "santiagoquispe@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"jesusprado@esfapa.edu.pe", email: "jesusprado@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"amandacordova@esfapa.edu.pe", email: "amandacordova@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"eleodoroalvarez@esfapa.edu.pe", email: "eleodoroalvarez@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"luisariste@esfapa.edu.pe", email: "luisariste@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"constantinoccaico@esfapa.edu.pe", email: "constantinoccaico@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"julioarones@esfapa.edu.pe", email: "julioarones@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"moisesanchahua@esfapa.edu.pe", email: "moisesanchahua@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"nancyasto@esfapa.edu.pe", email: "nancyasto@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"reynaldocabrera@esfapa.edu.pe", email: "reynaldocabrera@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"josecanchari@esfapa.edu.pe", email: "josecanchari@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"juanchuchon@esfapa.edu.pe", email: "juanchuchon@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"olimpiacordero@esfapa.edu.pe", email: "olimpiacordero@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"ricardomallqui@esfapa.edu.pe", email: "ricardomallqui@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"labslovmiranda@esfapa.edu.pe", email: "labslovmiranda@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"katiaoriundo@esfapa.edu.pe", email: "katiaoriundo@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"reyderquispe@esfapa.edu.pe", email: "reyderquispe@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"williamrojas@esfapa.edu.pe", email: "williamrojas@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"edgarsabastizagal@esfapa.edu.pe", email: "edgarsabastizagal@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"richardsulca@esfapa.edu.pe", email: "richardsulca@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"saulsulla@esfapa.edu.pe", email: "saulsulla@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"roberttorre@esfapa.edu.pe", email: "roberttorre@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"teofilotorres@esfapa.edu.pe", email: "teofilotorres@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"nancyviza@esfapa.edu.pe", email: "nancyviza@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"edwincconislla@esfapa.edu.pe", email: "edwincconislla@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"rogerramos@esfapa.edu.pe", email: "rogerramos@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"einerjauregui@esfapa.edu.pe", email: "einerjauregui@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"kattiaapcho@esfapa.edu.pe", email: "kattiaapcho@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"willianhinostroza@esfapa.edu.pe", email: "willianhinostroza@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"juanamorales@esfapa.edu.pe", email: "juanamorales@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"isaiascconislla@esfapa.edu.pe", email: "isaiascconislla@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"tomasenciso@esfapa.edu.pe", email: "tomasenciso@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"celedoniagutierrez@esfapa.edu.pe", email: "celedoniagutierrez@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"mariopablo@esfapa.edu.pe", email: "mariopablo@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"carlosoriundo@esfapa.edu.pe", email: "carlosoriundo@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"davidmarmolejo@esfapa.edu.pe", email: "davidmarmolejo@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"machurtado@esfapa.edu.pe", email: "machurtado@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"fiorelaarones@esfapa.edu.pe", email: "fiorelaarones@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"netypayala@esfapa.edu.pe", email: "netypayala@esfapa.edu.pe", password: "esfapa", rol:"3", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
],
)


db.users.deleteMany(    [
{password:"70417745")},
{password:"76582030")},
{password:"74352810")},
{password:"75285203")},
{password:"70414223")},
{password:"71275210")},
{password:"77540087")},
{password:"74196964")},
{password:"75781948")},
{password:"74564134")},
{password:"47534612")},
{password:"70547814")},
{password:"70406905")},
{password:"70426401")},
{password:"72658071")},
{password:"75911739")},
{password:"75812771")},
],
)


70417745 Carla
76582030 Diana
74352810 Maricielo
75285203 Neidi
70414223 Julio Cesar
71275210 Ana
77540087 Diana
74196964 Jerson
75781948 Jackelin
74564134 Ani
47534612 Joe
70547814 Nemias
70406905 Zarella
70426401 Noemi
72658071 Jesus Maria
75911739 Jeffri
75812771 Eva
TOVAR BERGARA, Leoncio

const w1=[
"70417745",
"76582030",
"74352810",
"75285203",
"70414223",
"71275210",
"77540087",
"74196964",
"75781948",
"74564134",
"47534612",
"70547814",
"70406905",
"70426401",
"72658071",
"75911739",
"75812771",
]

db.users.find({password:{$in:w1 }},{_id:1}).pretty()


 db.users.find({password:{$in:w }},{_id:1}).pretty() //solo _id.






	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"")}
])
//Nested data
db.wwws.insertMany(
[
	{name:"75869653",email: "75869653@w",  size: { h: 14, w: 21, uom: "cm" }, password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")}])
-//Actualizar e ingresar documentos nested
db.users.update( {_id: ObjectId('623cd42f0ad9cfb39677310e')}, { '$set': {"size.h" : 'www'} });
//Actualizar e ingresar documentos nuevos
db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, {$set:{'role':'New MongoDB Tutorial', 'rolewww':'New MongoDB Tutorial'}} )

//Actualizar y agregar documentos nuevos a toda la collección
db.curses.updateMany( { }, {$set:{'ciclo':'V', 'credito':'3', 'especialidad':'G'}} )
---------------------
db.wwws.update( { '_id':ObjectId('623bcd104e6f90b190a6d1d8') }, {$set:{'rol':'New MongoDB Tutorial', 'new2':'New MongoDB Tutorial'}} )
db.users.update( { 'name':'' }, {$set:{'rol':'1'}} )

//eliminar un documento. Only one with ID
db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, { $unset: { type: "" } } )
//All with field "type"
db.wwws.updateMany( { }, { $unset: { type: "" } } )
//Remover collection
db.users.deletemany( {'rol':3} )


mongodump --out w1.json --db fismart --host localhost  //descargar
mongorestore --db fismart ww.json/fismart  //subir
mongorestore --db fgpa ww.json/fgpa  //subir

mongodump --out w1.json --db fismart --collection wwws --host localhost
mongorestore --db namedatabase --collection namecollectionqueenviar w1.json/fisart //restaurar coleccion.




*/
