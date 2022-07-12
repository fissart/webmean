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
db.wwws.updateMany( { }, {$set:{'rol':'New MongoDB Tutorial', 'new2':'New MongoDB Tutorial'}} )
---------------------
db.wwws.update( { '_id':ObjectId('623bcd104e6f90b190a6d1d8') }, {$set:{'rol':'New MongoDB Tutorial', 'new2':'New MongoDB Tutorial'}} )
db.users.update( { 'name':'' }, {$set:{'rol':'1'}} )

//eliminar un documento. Only one with ID
db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, { $unset: { type: "" } } )
//All with field "type"
db.wwws.updateMany( { }, { $unset: { type: "" } } )
//Remover collection
db.wwws.remove( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')} )


mongodump --out w1.json --db fismart --host localhost  //descargar
mongorestore --db fismart ww.json/fismart  //subir
mongorestore --db fgpa ww.json/fgpa  //subir

mongodump --out w1.json --db fismart --collection wwws --host localhost
mongorestore --db namedatabase --collection namecollectionqueenviar w1.json/fisart //restaurar coleccion.



62111521	ACHA GONZALES, Gimena	FEMENINO	gimenaacha@esfapa.edu.pe	942277247	I CICLO	EDUCACIÓN ARTÍSTICA
76596114	AGUILAR SULCA, Élida Gabriela	FEMENINO	elidaaguilar@esfapa.edu.pe	926421703	I CICLO	EDUCACIÓN ARTÍSTICA
70673941	BARRIOS QUISPE, Nicolas Saul	MASCULINO	nicolasbarrios@esfapa.edu.pe	994489800	I CICLO	EDUCACIÓN ARTÍSTICA
73861140	BERROCAL VILCA, Lia Esthefany	FEMENINO	liaberrocal@esfapa.edu.pe	964892319	I CICLO	EDUCACIÓN ARTÍSTICA
70455963	BONIFACIO DE LA CRUZ, Mayumi  Mithsu	FEMENINO	mayumibonifacio@esfapa.edu.pe	957079037	I CICLO	EDUCACIÓN ARTÍSTICA
70109782	BULEJE BORDA, Lizbeth	FEMENINO	lizbethbuleje@esfapa.edu.pe	983002759	I CICLO	EDUCACIÓN ARTÍSTICA
73986159	CALDERÓN PARIONA, Javier Rolando	MASCULINO	javiercalderon@esfapa.edu.pe	912484689	I CICLO	EDUCACIÓN ARTÍSTICA
70471532	CANGANA MITMA, Juan Daniel	MASCULINO	juancangana@esfapa.edu.pe	924967458	I CICLO	EDUCACIÓN ARTÍSTICA
71438866	CAPCHA VILCA, Daybe Daniel	MASCULINO	daybecapcha@esfapa.edu.pe	935450410	I CICLO	EDUCACIÓN ARTÍSTICA
75667996	CARRASCO CURIS, Rocio	FEMENINO	rociocarrasco@esfapa.edu.pe	959124056	I CICLO	EDUCACIÓN ARTÍSTICA
70151272	CARRASCO CURIS, Yanet.	FEMENINO	yanetcarrasco@esfapa.edu.pe	941791896	I CICLO	EDUCACIÓN ARTÍSTICA
72284509	CCAICURI HUAMANI, Liz Alexandra	FEMENINO	lizccaicuri@esfapa.edu.pe	992684924	I CICLO	EDUCACIÓN ARTÍSTICA
72487499	CHAUPEZ AYALA, Wyllians Bryton	MASCULINO	wyllianschaupez@esfapa.edu.pe	919585100	I CICLO	EDUCACIÓN ARTÍSTICA
47157561	CHUCHON IBIAS, Roxana	FEMENINO	roxanachuchon@esfapa.edu.pe	951442584	I CICLO	EDUCACIÓN ARTÍSTICA
75907378	CORDOVA MARTINEZ, Joseph Julio	MASCULINO	josephcordova@esfapa.edu.pe	933278155	I CICLO	EDUCACIÓN ARTÍSTICA
74529804	CORDOVA VILCHEZ, Handré Brahanny	MASCULINO	handrecordova@esfapa.edu.pe	976125030	I CICLO	EDUCACIÓN ARTÍSTICA
60862035	CORONADO QUISPE, Rosario Lizet	FEMENINO	rosariocoronado@esfapa.edu.pe	903075950	I CICLO	EDUCACIÓN ARTÍSTICA
72651187	ECHEGARAY HUAMAN, Milagros Elvira	FEMENINO	milagrosechegaray@esfapa.edu.pe	927369122	I CICLO	EDUCACIÓN ARTÍSTICA
74385932	FERNANDEZ CHUMPITAZ, Cesar Gabriel	MASCULINO	cesarfernandez@esfapa.edu.pe	958666015	I CICLO	EDUCACIÓN ARTÍSTICA
76987341	FLORES ARAUJO, Virma Charmely	FEMENINO	virmaflores@esfapa.edu.pe	925209473	I CICLO	EDUCACIÓN ARTÍSTICA
60201270	FLORES ATAUCUSI, David Andres	MASCULINO	davidflores@esfapa.edu.pe	925723651	I CICLO	EDUCACIÓN ARTÍSTICA
74397530	GONZALES AYALA, Christian Javier	MASCULINO	christiangonzales@esfapa.edu.pe	952457385	I CICLO	EDUCACIÓN ARTÍSTICA
71328357	HUAMAN AUQUI, Yumyra Briyith	FEMENINO	yumyrahuaman@esfapa.edu.pe	927508429	I CICLO	EDUCACIÓN ARTÍSTICA
40751800	HUAMAN PALOMINO, Beria Rosibel.	FEMENINO	beriahuaman@esfapa.edu.pe	966006274	I CICLO	EDUCACIÓN ARTÍSTICA
70802402	LAURENTE PIANTO, Roy Rusveth	MASCULINO	roylaurente@esfapa.edu.pe	933824334	I CICLO	EDUCACIÓN ARTÍSTICA
74150819	LECHE SANCHEZ, Yandira Antuaneth	FEMENINO	yandiraleche@esfapa.edu.pe	930524445	I CICLO	EDUCACIÓN ARTÍSTICA
71390643	LOAYZA CHUCHON, Elvia 	FEMENINO	elvialoayza@esfapa.edu.pe	929797218	I CICLO	EDUCACIÓN ARTÍSTICA
71416364	MAGALLANES JUNCO, Erikson Aldair	MASCULINO	eriksonmagallanes@esfapa.edu.pe	902448478	I CICLO	EDUCACIÓN ARTÍSTICA
72259277	MARTINEZ NOA, Sarai Lucia	FEMENINO	saraimartinez@esfapa.edu.pe	931072817	I CICLO	EDUCACIÓN ARTÍSTICA
76546282	MENDOZA ROJAS, Kumar Remigio	MASCULINO	kumarmendoza@esfapa.edu.pe	915964737	I CICLO	EDUCACIÓN ARTÍSTICA
75235875	MOREYRA RIMACHE, Marleny	FEMENINO	marlenymoreyra@esfapa.edu.pe	922618608	I CICLO	EDUCACIÓN ARTÍSTICA
74347661	MUCHA MORALES, Kenne Lisset	FEMENINO	kennemucha@esfapa.edu.pe	981466606	I CICLO	EDUCACIÓN ARTÍSTICA
77476369	OCHOA HUAMAN Geydy Aurelia	FEMENINO	geydyochoa@esfapa.edu.pe	902034848	I CICLO	EDUCACIÓN ARTÍSTICA
76336161	PARIONA JAYO, Florabel	FEMENINO	florabelpariona@esfapa.edu.pe	925694835	I CICLO	EDUCACIÓN ARTÍSTICA
70218966	PEREZ SOTO, Brenda Maryam	FEMENINO	brendaperez@esfapa.edu.pe	930844689	I CICLO	EDUCACIÓN ARTÍSTICA
70099069	PILLPE ARZAPALO, Diana Marisela	FEMENINO	dianapillpe@esfapa.edu.pe	963001491	I CICLO	EDUCACIÓN ARTÍSTICA
75957795	POMASONCCO SOSA, Jhon Smith	MASCULINO	jhonpomasoncco@esfapa.edu.pe	988573305	I CICLO	EDUCACIÓN ARTÍSTICA
76279546	QUISPE ARANGO, Sara	FEMENINO	saraquispe@esfapa.edu.pe	969600402	I CICLO	EDUCACIÓN ARTÍSTICA
75527815	QUISPE CHACCERI, Gerson Chalo	MASCULINO	gersonquispe@esfapa.edu.pe	963025006	I CICLO	EDUCACIÓN ARTÍSTICA
44843901	SANTIAGO FALCÓN, Joseph	MASCULINO	josephsantiago@esfapa.edu.pe	921344230	I CICLO	EDUCACIÓN ARTÍSTICA
72676845	SICOS VARGAS, Norah Gloria	FEMENINO	norahsicos@esfapa.edu.pe	992393126	I CICLO	EDUCACIÓN ARTÍSTICA
/08442050	TREJO CASTILLO, Julio Humberto	MASCULINO	juliotrejo@esfapa.edu.pe	910782263	I CICLO	EDUCACIÓN ARTÍSTICA
72377502	VEGA CONGA, Yusara Blanca	FEMENINO	yusaravega@esfapa.edu.pe	943429090	I CICLO	EDUCACIÓN ARTÍSTICA
71392757	ZAMORA SALVADOR, Daysi Haydee.	FEMENINO	daysizamora@esfapa.edu.pe	944250118	I CICLO	EDUCACIÓN ARTÍSTICA
73461334	ZANABRIA VILLANO, Juniors Nilson	MASCULINO	juniorszanabria@esfapa.edu.pe	930390573	I CICLO	EDUCACIÓN ARTÍSTICA
70208591	ARCE TRUJILLO, Flor Elizabeth	FEMENINO	florarce@esfapa.edu.pe	927630645	III CICLO	EDUCACIÓN ARTÍSTICA
74196934	ARANGO MARTINEZ, Yerson 	MASCULINO	yersonarango@esfapa.edu.pe	955917440	III CICLO	EDUCACIÓN ARTÍSTICA
75285203	AYALA MEDINA, Neyvi María	FEMENINO	neyviayala@esfapa.edu.pe	936509912	III CICLO	EDUCACIÓN ARTÍSTICA
75911739	AYME DIAZ, Jeffry Deyvid	MASCULINO	jeffryayme@esfapa.edu.pe	954676917	III CICLO	EDUCACIÓN ARTÍSTICA
77903668	BARRIENTOS CARDENAS, Jasiel Ccadhy 	FEMENINO	jasielbarrientos@esfapa.edu.pe	925835661	III CICLO	EDUCACIÓN ARTÍSTICA
70338950	BAUTISTA CONDORI, Lizeth	FEMENINO	lizethbautista@esfapa.edu.pe	976908820	III CICLO	EDUCACIÓN ARTÍSTICA
77540087	BELLIDO CARRASCO, Dayana Nayele	FEMENINO	dayanabellido@esfapa.edu.pe	932702546	III CICLO	EDUCACIÓN ARTÍSTICA
70426401	CANCHO RIVERA, Noemi Celestina	FEMENINO	noemicancho@esfapa.edu.pe	901907048	III CICLO	EDUCACIÓN ARTÍSTICA
72658071	CARRASCO DURAND, Jesús María 	FEMENINO	jesúscarrasco@esfapa.edu.pe	960980642	III CICLO	EDUCACIÓN ARTÍSTICA
75812771	CUETO FLORES, Eva María	FEMENINO	evacueto@esfapa.edu.pe	928628933	III CICLO	EDUCACIÓN ARTÍSTICA
74064184	ESPINO JANAMPA, Annye  Stefhany	FEMENINO	annyeespino@esfapa.edu.pe	965160974	III CICLO	EDUCACIÓN ARTÍSTICA
42670257	GUTIERREZ CABRERA, Angel Ricky	MASCULINO	angelgutierrez@esfapa.edu.pe	966850704	III CICLO	EDUCACIÓN ARTÍSTICA
70852712	JORGE RAUCANA, Luis Miguel	MASCULINO	luisjorge@esfapa.edu.pe	901273305	III CICLO	EDUCACIÓN ARTÍSTICA
72863952	HERNANDO LOZANO, Luis Enrique	MASCULINO	luishernando@esfapa.edu.pe	969681543	III CICLO	EDUCACIÓN ARTÍSTICA
45901414	JANAMPA INGA, Luis	MASCULINO	luisjanampa@esfapa.edu.pe	921992601	III CICLO	EDUCACIÓN ARTÍSTICA
44444470	JAYO CUSIPOMA, Esther	FEMENINO	estherjayo@esfapa.edu.pe	970178214	III CICLO	EDUCACIÓN ARTÍSTICA
09653974	LEON PEREZ, Julio Edwin	MASCULINO	julioleon@esfapa.edu.pe	964244932	III CICLO	EDUCACIÓN ARTÍSTICA
75781948	LLANOS GUTIERREZ, Jakelin Mercedes 	FEMENINO	jakelinllanos@esfapa.edu.pe	940329083	III CICLO	EDUCACIÓN ARTÍSTICA
70419223	MARTÍNEZ NOA, Julio Cesar	MASCULINO	juliomartinez@esfapa.edu.pe	946854011	III CICLO	EDUCACIÓN ARTÍSTICA
71275210	ÑAUPA CARDENAS, Ana Lourdes Lucero	FEMENINO	ananaupa@esfapa.edu.pe	927581127	III CICLO	EDUCACIÓN ARTÍSTICA
72156362	PEREZ LEON, Teofilo Gilmer	MASCULINO	teofiloperez@esfapa.edu.pe	986571678	III CICLO	EDUCACIÓN ARTÍSTICA
47534612	PINEDA RAMOS, Marlon Joe	MASCULINO	marlonpineda@esfapa.edu.pe	966810208	III CICLO	EDUCACIÓN ARTÍSTICA
76582030	QUISPE CURIS, Diana Georgina	FEMENINO	dianaquispe@esfapa.edu.pe	910277374	III CICLO	EDUCACIÓN ARTÍSTICA
73973347	QUISPE SERDA, Marco Antonio	MASCULINO	marcoquispe@esfapa.edu.pe	957091759	III CICLO	EDUCACIÓN ARTÍSTICA
46026942	QUISPE SERDA, Tania Natali	FEMENINO	taniaquispe@esfapa.edu.pe	931887820	III CICLO	EDUCACIÓN ARTÍSTICA
71450694	QUISPERIMA ALARCON, Melissa Lucy	FEMENINO	melissaquisperima@esfapa.edu.pe	916677203	III CICLO	EDUCACIÓN ARTÍSTICA
76556280	RAFAEL PACHECO, Xiara Joselin	FEMENINO	xiararafael@esfapa.edu.pe	992976644	III CICLO	EDUCACIÓN ARTÍSTICA
75655284	RAYME ALLCCA, Luz Yennifer	FEMENINO	luzrayme@esfapa.edu.pe	910323994	III CICLO	EDUCACIÓN ARTÍSTICA
74352810	SAHUANAY CCORISONCCO, Maricielo Korayma	FEMENINO	maricielosahuanay@esfapa.edu.pe	934737963	III CICLO	EDUCACIÓN ARTÍSTICA
70406905	SAIRE PALOMINO, Zarella Ángela	FEMENINO	zarellasaire@esfapa.edu.pe	900156660	III CICLO	EDUCACIÓN ARTÍSTICA
77090833	SAUÑE GAMBOA, Luis Ángel	MASCULINO	luissaune@esfapa.edu.pe	929969582	III CICLO	EDUCACIÓN ARTÍSTICA
70547814	SULCA PALOMINO, Nemias	MASCULINO	nemiassulca@esfapa.edu.pe	970450143	III CICLO	EDUCACIÓN ARTÍSTICA
70045706	TORRES ARCE, Angie Paola	FEMENINO	angietorres@esfapa.edu.pe	915048731	III CICLO	EDUCACIÓN ARTÍSTICA
70417745	VILLALOBOS HUAYHUA, Carla Antonia	FEMENINO	carlavillalobos@esfapa.edu.pe	929187717	III CICLO	EDUCACIÓN ARTÍSTICA
71990208	AGUIRRE HUAYHUA, Yishel Dayana	FEMENINO	yishelaguirre@esfapa.edu.pe	954588887	V CICLO	EDUCACIÓN ARTÍSTICA
73462147	ALVAREZ SULCA, Antuané Esmeralda	FEMENINO	antuanealvarez@esfapa.edu.pe	938674406	V CICLO	EDUCACIÓN ARTÍSTICA
40651545	ATAURIMA MAÑUICO, Raul	MASCULINO	raulataurima@esfapa.edu.pe	975374453	V CICLO	EDUCACIÓN ARTÍSTICA
46869371	BORDA HUAMAN, Jhon Disney	MASCULINO	jhonborda@esfapa.edu.pe	966779637	V CICLO	EDUCACIÓN ARTÍSTICA
70573511	CAHUANA OCHANTE, Juan Carlos	MASCULINO	juancahuana@esfapa.edu.pe	982729666	V CICLO	EDUCACIÓN ARTÍSTICA
74456983	CASTELLARES GUILLEN, Anet Yaquelin	FEMENINO	anetcastellares@esfapa.edu.pe	941307615	V CICLO	EDUCACIÓN ARTÍSTICA
73424709	CASTILLO FLORES, Brayan Smith	MASCULINO	brayancastillo@esfapa.edu.pe	990411488	V CICLO	EDUCACIÓN ARTÍSTICA
71863638	CASTILLO TORRES, Dino	MASCULINO	dinocastillo@esfapa.edu.pe	900578683	V CICLO	EDUCACIÓN ARTÍSTICA
25807458	CESPEDES MOREIRA, Hector	MASCULINO	hectorcespedes@esfapa.edu.pe	944293857	V CICLO	EDUCACIÓN ARTÍSTICA
70391357	CHIRI ORE, Nasha Liliana	FEMENINO	nashachiri@esfapa.edu.pe	999892103	V CICLO	EDUCACIÓN ARTÍSTICA
72352505	CONDORI PEREZ, María Ángela	FEMENINO	mariacondori@esfapa.edu.pe	920055523	V CICLO	EDUCACIÓN ARTÍSTICA
74200216	CRISANTE CUBA, Oscar Alvaro	MASCULINO	oscarcrisante@esfapa.edu.pe	920326661	V CICLO	EDUCACIÓN ARTÍSTICA
70077258	CURI VILA, Elmer Miguel 	MASCULINO	elmercuri@esfapa.edu.pe	943005900	V CICLO	EDUCACIÓN ARTÍSTICA
76328969	CURI VILLANUEVA, Omar Gonzalo	MASCULINO	omarcuri@esfapa.edu.pe	993262617	V CICLO	EDUCACIÓN ARTÍSTICA
78291082	DURAND DELGADO, Camila Raquel	FEMENINO	camiladurand@esfapa.edu.pe	952156288	V CICLO	EDUCACIÓN ARTÍSTICA
70433634	ENCISO RAMOS, Paul Pablo	MASCULINO	paulenciso@esfapa.edu.pe	936517246	V CICLO	EDUCACIÓN ARTÍSTICA
70205888	GOMEZ PATIÑO, Pilar Mónica	FEMENINO	pilargomez@esfapa.edu.pe	987045621	V CICLO	EDUCACIÓN ARTÍSTICA
63384518	GUILLEN CRISOSTOMO, Cristian José	MASCULINO	cristhianguillen@esfapa.edu.pe	943513640	V CICLO	EDUCACIÓN ARTÍSTICA
44342503	GUTIERREZ BRIGADA, Mayco Max	MASCULINO	maycogutierrez@esfapa.edu.pe	975088099	V CICLO	EDUCACIÓN ARTÍSTICA
70050685	GUTIERREZ CORDERO, Emily Tatiana	FEMENINO	emilygutierrez@esfapa.edu.pe	900974352	V CICLO	EDUCACIÓN ARTÍSTICA
71301068	GUTIERREZ ORTÍZ, Elmer	MASCULINO	elmergutierrez@esfapa.edu.pe	900168187	V CICLO	EDUCACIÓN ARTÍSTICA
70506064	HUAMÁN HUALLANCA, Mirian Lisbeth	FEMENINO	mirianhuaman@esfapa.edu.pe	994350867	V CICLO	EDUCACIÓN ARTÍSTICA
47638330	LLALLIRE YUPANQUI, Juan Ronal	MASCULINO	juanllallire@esfapa.edu.pe	913950888	V CICLO	EDUCACIÓN ARTÍSTICA
72917632	MAURICIO HUARACA, Jhanela Neira	FEMENINO	jhanelamauricio@esfapa.edu.pe	957273006	V CICLO	EDUCACIÓN ARTÍSTICA
42768000	MEDINA BENDEZU, Jhonathan	MASCULINO	jhonathanmedina@esfapa.edu.pe	943100930	V CICLO	EDUCACIÓN ARTÍSTICA
41924292	MEDINA PARIONA, Edith	FEMENINO	edithmedina@esfapa.edu.pe	986963352	V CICLO	EDUCACIÓN ARTÍSTICA
71942328	MEDRANO SANCHEZ, Maycol Oscar	MASCULINO	maycolmedrano@esfapa.edu.pe	916055744	V CICLO	EDUCACIÓN ARTÍSTICA
44154555	MENDOZA ROJAS, Juan Germán	MASCULINO	juanmendoza@esfapa.edu.pe	920572502	V CICLO	EDUCACIÓN ARTÍSTICA
47479297	MENDOZA ROJAS, Kevin Remigio	MASCULINO	kevinmendoza@esfapa.edu.pe	949693941	V CICLO	EDUCACIÓN ARTÍSTICA
71800732	ÑAUPA MARTINEZ, Yoel Clemente	MASCULINO	yoelnaupa@esfapa.edu.pe	921785928	V CICLO	EDUCACIÓN ARTÍSTICA
71888973	PACHECO VALDEZ, Felicer	MASCULINO	felicerpacheco@esfapa.edu.pe	980785344	V CICLO	EDUCACIÓN ARTÍSTICA
70565837	PAQUIYAURI QUISPE, Elizabeth Thalia	FEMENINO	elizabethpaquiyauri@esfapa.edu.pe	973386431	V CICLO	EDUCACIÓN ARTÍSTICA
73877063	PILLACA MEDINA, Klisman Teofilo	MASCULINO	klinsmanpillaca@esfapa.edu.pe	977878221	V CICLO	EDUCACIÓN ARTÍSTICA
70020574	POMASONCCO PRETELL, Antonio	MASCULINO	antoniopomasoncco@esfapa.edu.pe	918734487	V CICLO	EDUCACIÓN ARTÍSTICA
70809465	POZO ZAMORA, Waldir	MASCULINO	waldirpozo@esfapa.edu.pe	912323576	V CICLO	EDUCACIÓN ARTÍSTICA
77136451	QUISPE LAPA, Rosibel	FEMENINO	rosibelquispe@esfapa.edu.pe	946729433	V CICLO	EDUCACIÓN ARTÍSTICA
74401645	QUISPE ORÉ, Aida Camila	FEMENINO	aidaquispe@esfapa.edu.pe	999349710	V CICLO	EDUCACIÓN ARTÍSTICA
72014705	QUISPE PARIONA, Melisa	FEMENINO	melisaquispe@esfapa.edu.pe	928698757	V CICLO	EDUCACIÓN ARTÍSTICA
70217941	RICRA DURAND, Nazario	MASCULINO	nazarioricra@esfapa.edu.pe	913302746	V CICLO	EDUCACIÓN ARTÍSTICA
70415470	SUAREZ QUISPE, María Clara	FEMENINO	mariasuarez@esfapa.edu.pe	955126840	V CICLO	EDUCACIÓN ARTÍSTICA
76549784	TORRES MORALES, Fiorela	FEMENINO	fiorelatorres@esfapa.edu.pe	900913857	V CICLO	EDUCACIÓN ARTÍSTICA
77681122	TORRES MUÑOZ, DANIEL Anthony	MASCULINO	danieltorres@esfapa.edu.pe	913977486	V CICLO	EDUCACIÓN ARTÍSTICA
70426947	TUMBALOBOS ROJAS, Karen Danae	FEMENINO	karentumbalobos@esfapa.edu.pe	996952407	V CICLO	EDUCACIÓN ARTÍSTICA
75559995	VARGAS BOCANEGRA, Yolanda	FEMENINO	yolandavargas@esfapa.edu.pe	952605060	V CICLO	EDUCACIÓN ARTÍSTICA
70397668	YUPARI GUTIERREZ, Susan Luz	FEMENINO	susanyupari@esfapa.edu.pe	956760766	V CICLO	EDUCACIÓN ARTÍSTICA
46276021	ALCA ARONI, Soledad	FEMENINO	soledadalca@esfapa.edu.pe	940963434	VII CICLO	EDUCACIÓN ARTÍSTICA
70239353	BENDEZU PONSECA, Roy Kevin	MASCULINO	roybendezu@esfapa.edu.pe	900178402	VII CICLO	EDUCACIÓN ARTÍSTICA
70779425	CABRERA SOTO, Erick Kenyi	MASCULINO	erickcabrera@esfapa.edu.pe	914599268	VII CICLO	EDUCACIÓN ARTÍSTICA
70421372	CAHUIN ALVA, Marcos Gabriel	MASCULINO	marcoscahuin@esfapa.edu.pe	910981982	VII CICLO	EDUCACIÓN ARTÍSTICA
70251660	CAMPOS ORE, Diego Aldair	MASCULINO	diegocampos@esfapa.edu.pe	987574084	VII CICLO	EDUCACIÓN ARTÍSTICA
71771557	CARDENAS QUISPE, Jose Ronaldo	MASCULINO	josecardenas@esfapa.edu.pe	900172479	VII CICLO	EDUCACIÓN ARTÍSTICA
70112748	COLLADO SICHA, Edgar Jhon	MASCULINO	edgarcollado@esfapa.edu.pe	980105723	VII CICLO	EDUCACIÓN ARTÍSTICA
74301442	CONDOLI TORRES, Rey Revelino	MASCULINO	reycondoli@esfapa.edu.pe	995536850	VII CICLO	EDUCACIÓN ARTÍSTICA
45364107	CCORISONCCO PINCO, Josue	MASCULINO	reyccorisoncco@esfapa.edu.pe	982038109	VII CICLO	EDUCACIÓN ARTÍSTICA
74451076	CRUZ PACHECO, Jose Luis	MASCULINO	josecruz@esfapa.edu.pe	916747894	VII CICLO	EDUCACIÓN ARTÍSTICA
77136426	DE LA CRUZ QUISPE, Analy	FEMENINO	analydelacruz@esfapa.edu.pe	934176830	VII CICLO	EDUCACIÓN ARTÍSTICA
70428402	DELGADO HINOSTROZA, Luis Jhajanet Sharit	MASCULINO	luisdelgado@esfapa.edu.pe	983757545	VII CICLO	EDUCACIÓN ARTÍSTICA
43070374	DOMINGUEZ POMA, Geobana	FEMENINO	geobanadominguez@esfapa.edu.pe	999024356	VII CICLO	EDUCACIÓN ARTÍSTICA
48303864	ESPINO PALOMINO, Hebert Michael	MASCULINO	herbertespino@esfapa.edu.pe	995271631	VII CICLO	EDUCACIÓN ARTÍSTICA
70454157	HUAMAN PALOMINO, Tania Ruth	FEMENINO	taniahuaman@esfapa.edu.pe	950031388	VII CICLO	EDUCACIÓN ARTÍSTICA
70233393	HUARCAYA HUICHO, Juana Margoth	FEMENINO	juanahuarcaya@esfapa.edu.pe	993286433	VII CICLO	EDUCACIÓN ARTÍSTICA
41749569	HUAYHUA PEÑA, Mirian Yovana	FEMENINO	mirianhuayhua@esfapa.edu.pe	983903642	VII CICLO	EDUCACIÓN ARTÍSTICA
73869771	LIMAQUISPE QUISPE, Kelly Lianna	FEMENINO	kellylimaquispe@esfapa.edu.pe	931521942	VII CICLO	EDUCACIÓN ARTÍSTICA
76062955	LOPEZ JANAMPA, Eber	MASCULINO	eberlopez@esfapa.edu.pe	917742217	VII CICLO	EDUCACIÓN ARTÍSTICA
74207821	MANCILLA  LOPEZ, Flor de Maria	FEMENINO	flormacilla@esfapa.edu.pe	989503339	VII CICLO	EDUCACIÓN ARTÍSTICA
76409092	MEDINA POCRA, Neyla	FEMENINO	neylamedina@esfapa.edu.pe	975420983	VII CICLO	EDUCACIÓN ARTÍSTICA
60888219	PAREDES PACOTAYPE, Pamela Nathaly	FEMENINO	pamelaparedes@esfapa.edu.pe	943593088	VII CICLO	EDUCACIÓN ARTÍSTICA
74170091	QUISPE ALANYA, Dana Mercedes 	FEMENINO	danaquispe@esfapa.edu.pe	910147909	VII CICLO	EDUCACIÓN ARTÍSTICA
44028694	QUISPE CUCHURI, Alfredo Fidel	MASCULINO	alfredoquispe@esfapa.edu.pe	997508490	VII CICLO	EDUCACIÓN ARTÍSTICA
71771783	QUISPE CUNTO, Alejandro	MASCULINO	alejandroquispe@esfapa.edu.pe	997508490	VII CICLO	EDUCACIÓN ARTÍSTICA
72653818	QUISPE URBANO, Luzmerly Celeste	FEMENINO	luzmerlyquispe@esfapa.edu.pe	918544922	VII CICLO	EDUCACIÓN ARTÍSTICA
75471546	QUISPE URBIOLA, Aracely Victoria	FEMENINO	aracelyquispe@esfapa.edu.pe	951484144	VII CICLO	EDUCACIÓN ARTÍSTICA
46188112	ROJAS CONDE, David Moises	MASCULINO	davidrojas@esfapa.edu.pe	997508490	VII CICLO	EDUCACIÓN ARTÍSTICA
77147405	RUIZ CHOCCE, Sandy Margot	FEMENINO	sandychocce@esfapa.edu.pe	910103016	VII CICLO	EDUCACIÓN ARTÍSTICA
70933269	TAIPE ROCA, Lucia Victoria	FEMENINO	luciataipe@esfapa.edu.pe	932598721	VII CICLO	EDUCACIÓN ARTÍSTICA
74875348	URBANO YUCRA, Hector	MASCULINO	hectorurbano@esfapa.edu.pe	969825510	VII CICLO	EDUCACIÓN ARTÍSTICA
73907234	VASQUEZ GARCIA, Meline Liz	FEMENINO	melinevasquez@esfapa.edu.pe	977108742	VII CICLO	EDUCACIÓN ARTÍSTICA
72377511	YARANGA LOPEZ, Ruth Yuliana	FEMENINO	ruthyaranga@esfapa.edu.pe	978096392	VII CICLO	EDUCACIÓN ARTÍSTICA
70050622	ANDONAIRE SIMON, Yanina Lizseth	FEMENINO	yaninaandonaire@esfapa.edu.pe	988661908	IX CICLO	EDUCACIÓN ARTÍSTICA
71298601	ARANGO RIVEROS, Jorge	MASCULINO	jorgearango@esfapa.edu.pe	918397046	IX CICLO	EDUCACIÓN ARTÍSTICA
76562326	CARDENAS LAGOS, Frank Roger	MASCULINO	frankcardenas@esfapa.edu.pe	982414433	IX CICLO	EDUCACIÓN ARTÍSTICA
74421228	CASAS HUAMAN, Christian Kevin	MASCULINO	christiancasas@esfapa.edu.pe	917228064	IX CICLO	EDUCACIÓN ARTÍSTICA
70207656	DIAZ ALFARO, Ronaldo Valentin	MASCULINO	ronaldodiaz@esfapa.edu.pe	916132281	IX CICLO	EDUCACIÓN ARTÍSTICA
70830465	FERNANDEZ VENTURA, Redolfo	MASCULINO	redolfofernandez@esfapa.edu.pe	917778236	IX CICLO	EDUCACIÓN ARTÍSTICA
70152062	FLORES JOSÉ, Ana Maribel	FEMENINO	anaflores@esfapa.edu.pe	928593330	IX CICLO	EDUCACIÓN ARTÍSTICA
70426976	GOMEZ VIVANCO, Jesus Alberto	MASCULINO	jesusgomez@esfapa.edu.pe	954294166	IX CICLO	EDUCACIÓN ARTÍSTICA
28315608	GUTIERREZ BRIGADA, Avelino Luis	MASCULINO	avelinogutierrez@esfapa.edu.pe	987125631	IX CICLO	EDUCACIÓN ARTÍSTICA
71886369	HUARI MORAN, Francisco Orlando	MASCULINO	franciscohuari@esfapa.edu.pe	933081490	IX CICLO	EDUCACIÓN ARTÍSTICA
70057888	JAIME HUAMANI, Ruth Karina	FEMENINO	ruthjaime@esfapa.edu.pe	924331595	IX CICLO	EDUCACIÓN ARTÍSTICA
78546043	LLAUCE QUISPE, Tania Fiorella	FEMENINO	taniallauce@esfapa.edu.pe	917228064	IX CICLO	EDUCACIÓN ARTÍSTICA
70653536	MEDINA TINOCO, Rosario Lizbeth	FEMENINO	rosariomedina@esfapa.edu.pe	969129989	IX CICLO	EDUCACIÓN ARTÍSTICA
70054537	MEZA HERRERAS, José Luis	MASCULINO	josemeza@esfapa.edu.pe	951603856	IX CICLO	EDUCACIÓN ARTÍSTICA
70152188	MUNAYLLA MARTINEZ, Maria Isabel	FEMENINO	mariamunaylla@esfapa.edu.pe	925205048	IX CICLO	EDUCACIÓN ARTÍSTICA
70418404	ORIUNDO NAVARRO, Rosselyne Rubí	FEMENINO	rosselyneoriundo@esfapa.edu.pe	902749423	IX CICLO	EDUCACIÓN ARTÍSTICA
46888208	PARIONA AGUILAR, Arnida Gliset	FEMENINO	arnidapariona@esfapa.edu.pe	943365238	IX CICLO	EDUCACIÓN ARTÍSTICA
70977332	PEREZ CUAREZ, Nicol Jhasmin	FEMENINO	nicolperez@esfapa.edu.pe	910689973	IX CICLO	EDUCACIÓN ARTÍSTICA
70690489	POMA POMASONCCO, Prudencio Dionisio	MASCULINO	prudenciopoma@esfapa.edu.pe	931545158	IX CICLO	EDUCACIÓN ARTÍSTICA
73984253	QUISPE URBANO, Ashlin Neptaly	FEMENINO	ashlinquispe@esfapa.edu.pe	900479095	IX CICLO	EDUCACIÓN ARTÍSTICA
46361915	QUISPE ORIUNDO, Rolando	MASCULINO	rolandoquispe@esfapa.edu.pe	971532114	IX CICLO	EDUCACIÓN ARTÍSTICA
60540589	SAAVEDRA CAMACHO, Alfredo Antonio	MASCULINO	alfredosaavedra@esfapa.edu.pe	942317099	IX CICLO	EDUCACIÓN ARTÍSTICA
70565911	SANCHEZ HUAMAN, Carlos Alberto	MASCULINO	carlossanchez@esfapa.edu.pe	946031668	IX CICLO	EDUCACIÓN ARTÍSTICA
70818722	ZAMORA QUISPE, Marisol	FEMENINO	marisolzamora@esfapa.edu.pe	917755487	IX CICLO	EDUCACIÓN ARTÍSTICA
71596957	ALCARRAZ QUISPE, Whiny Anghel	MASCULINO	whinyalcarraz@esfapa.edu.pe	972064673	I CICLO	ARTISTA PROFESIONAL /PINTURA
70905181	APARICIO TAQUIRI, Carlos Sebastián	MASCULINO	carlosaparicio@esfapa.edu.pe	944488869	I CICLO	ARTISTA PROFESIONAL /PINTURA
77434743	BEJAR ASTO, Claudia Nicolle	FEMENINO	claudiabejar@esfapa.edu.pe	981081157	I CICLO	ARTISTA PROFESIONAL /PINTURA
48333242	BERNAL ALDAZABAL, Erick Fidel	MASCULINO	erickbernal@esfapa.edu.pe	918920020	I CICLO	ARTISTA PROFESIONAL /PINTURA
60586750	CAMARENA ORIUNDO, Jade Ariana Génesis	FEMENINO	jadecamarena@esfapa.edu.pe	968733049	I CICLO	ARTISTA PROFESIONAL /PINTURA
46281909	CAMPOS BERROCAL, David Luisin	MASCULINO	davidcampos@esfapa.edu.pe	944983715	I CICLO	ARTISTA PROFESIONAL /PINTURA
74310534	CANCHO TUDELANO, Hebert Alex	MASCULINO	hebertcancho@esfapa.edu.pe	994961737	I CICLO	ARTISTA PROFESIONAL /PINTURA
70430814	CARHUAS LEON, Anderson Nestor	MASCULINO	andersoncarhuas@esfapa.edu.pe	912749185	I CICLO	ARTISTA PROFESIONAL /PINTURA
70410774	CARRERA GÁLVEZ, Joshua Adoniram	MASCULINO	joshuacarrera@esfapa.edu.pe	913283312	I CICLO	ARTISTA PROFESIONAL /PINTURA
70425591	CARRERA GÁLVEZ, Zurisadai Lucero	FEMENINO	zurisadaicarrera@esfapa.edu.pe	941367686	I CICLO	ARTISTA PROFESIONAL /PINTURA
70428120	CHINO ROJAS, Anais Zenaida	FEMENINO	anaischino@esfapa.edu.pe	933190056	I CICLO	ARTISTA PROFESIONAL /PINTURA
70788957	CURO MARCA, Cristofer Andres	MASCULINO	cristofercuro@esfapa.edu.pe	968091947	I CICLO	ARTISTA PROFESIONAL /PINTURA
74841760	FLORES PORRAS, Flor Cristina	FEMENINO	florflores@esfapa.edu.pe	924851660	I CICLO	ARTISTA PROFESIONAL /PINTURA
61421637	GALLARDO PAREDES, Levy Mahel	MASCULINO	levygallardo@esfapa.edu.pe	930486865	I CICLO	ARTISTA PROFESIONAL /PINTURA
72919851	GOMEZ YUPANQUI, Solie Pamela	FEMENINO	soliegomez@esfapa.edu.pe	993373315	I CICLO	ARTISTA PROFESIONAL /PINTURA
70157180	GUTIERREZ ALAYA, Darlin Lucero	FEMENINO	darlingutierrez@esfapa.edu.pe	939853079	I CICLO	ARTISTA PROFESIONAL /PINTURA
70662911	GUTIERREZ GÓMEZ, Nelia Luz	FEMENINO	neliagutierrez@esfapa.edu.pe	973789791	I CICLO	ARTISTA PROFESIONAL /PINTURA
74356961	HUAMAN QUIQUIN, Julio Luis	MASCULINO	juliohuaman@esfapa.edu.pe	935257262	I CICLO	ARTISTA PROFESIONAL /PINTURA
70462499	HUAMANI PALOMINO, Coraima Paola	FEMENINO	coraimahuamani@esfapa.edu.pe	957715832	I CICLO	ARTISTA PROFESIONAL /PINTURA
71290314	HUARANCCA OCHOA, Rooss Jhassmin	FEMENINO	roosshuarancca@esfapa.edu.pe	969921749	I CICLO	ARTISTA PROFESIONAL /PINTURA
46710518	HUARSAYA VEGA, Alejandra	FEMENINO	alejandrahuarsaya@esfapa.edu.pe	985283333	I CICLO	ARTISTA PROFESIONAL /PINTURA
71286278	LABIO ESTRADA, Raúl Antony	MASCULINO	raullabio@esfapa.edu.pe	940380594	I CICLO	ARTISTA PROFESIONAL /PINTURA
72637400	LAURA PRADO, Renato Aldair	MASCULINO	renatolaura@esfapa.edu.pe	961982797	I CICLO	ARTISTA PROFESIONAL /PINTURA
76260769	LOPEZ MEDRANO, Pedro Emiliano	MASCULINO	pedrolopez@esfapa.edu.pe	965715269	I CICLO	ARTISTA PROFESIONAL /PINTURA
28289824	LUNA MOLERO, Hugo Roberto	MASCULINO	hugoluna@esfapa.edu.pe	990508096	I CICLO	ARTISTA PROFESIONAL /PINTURA
46316469	MARQUEZ SANCHEZ, Ivan Gustavo	MASCULINO	ivanmarquez@esfapa.edu.pe	949319000	I CICLO	ARTISTA PROFESIONAL /PINTURA
74136615	MEZA PARIONA, Blanca Antonia	FEMENINO	blancameza@esfapa.edu.pe	918983372	I CICLO	ARTISTA PROFESIONAL /PINTURA
73665449	MORALES SABOYA, Alison Jhomayra	FEMENINO	alisonmorales@esfapa.edu.pe	991511572	I CICLO	ARTISTA PROFESIONAL /PINTURA
70107902	PALOMINO RODRIGUEZ, Mayumy Liz	FEMENINO	mayumypalomino@esfapa.edu.pe	910671338	I CICLO	ARTISTA PROFESIONAL /PINTURA
74162741	PEÑA CCOLLCCA, Juan Carlos	MASCULINO	juanpena@esfapa.edu.pe	993798024	I CICLO	ARTISTA PROFESIONAL /PINTURA
74244547	PLATAS RODRIGUEZ, Jean Carlos	MASCULINO	jeanplatas@esfapa.edu.pe	961851627	I CICLO	ARTISTA PROFESIONAL /PINTURA
72267564	POMA LLACCTA, Julio Cesar	MASCULINO	juliopoma@esfapa.edu.pe	927165538	I CICLO	ARTISTA PROFESIONAL /PINTURA
71749395	POZO ORTIZ, Yhenifer Mayleyny 	FEMENINO	yheniferpozo@esfapa.edu.pe	959750291	I CICLO	ARTISTA PROFESIONAL /PINTURA
70417748	QUINTO HINOSTROZA, Cristian Arius	MASCULINO	cristianquinto@esfapa.edu.pe	977854608	I CICLO	ARTISTA PROFESIONAL /PINTURA
76857195	QUISPE RAMIREZ, Dandy Bebeto	MASCULINO	dandyquispe@esfapa.edu.pe	987698492	I CICLO	ARTISTA PROFESIONAL /PINTURA
72946139	RIVERA RAMIREZ, Elver Teofilo	MASCULINO	elverrivera@esfapa.edu.pe	916045304	I CICLO	ARTISTA PROFESIONAL /PINTURA
71140831	ROCA GARCIA, Katheryne Ruth	FEMENINO	katheryneroca@esfapa.edu.pe	979370292	I CICLO	ARTISTA PROFESIONAL /PINTURA
74029638	SANCHEZ VARGAS, Luz Clarita	FEMENINO	luzsanchez@esfapa.edu.pe	936745310	I CICLO	ARTISTA PROFESIONAL /PINTURA
70579049	TABOADA HUACCAN, Jhon Edison	MASCULINO	jhontaboada@esfapa.edu.pe	965104212	I CICLO	ARTISTA PROFESIONAL /PINTURA
73617774	VARGAS  MARTINEZ, Joel Jeanpierre	MASCULINO	joelvargas@esfapa.edu.pe	941737324	I CICLO	ARTISTA PROFESIONAL /PINTURA
72947706	VEGA VERGARA, Katherine Kirstin	FEMENINO	katherinevega@esfapa.edu.pe	915147925	I CICLO	ARTISTA PROFESIONAL /PINTURA
72009675	VENTURA CAMPOS, Deysi Julia	FEMENINO	deysiventura@esfapa.edu.pe	916357637	I CICLO	ARTISTA PROFESIONAL /PINTURA
70665973	VILLANUEVA HUAMANI, Rafael Ivan	MASCULINO	rafaelvillanueva@esfapa.edu.pe	963358442	I CICLO	ARTISTA PROFESIONAL /PINTURA
72210846	VILLAR TELLO, Loyda Válery	FEMENINO	loydavillar@esfapa.edu.pe	980780974	I CICLO	ARTISTA PROFESIONAL /PINTURA
73745914	AGUIRRE DIPAS, Jhonmir Jefry	MASCULINO	jhonmiraguirre@esfapa.edu.pe	912922072	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70410731	ALVIAR ROJAS, Jhoel	MASCULINO	jhoelalviar@esfapa.edu.pe	932517759	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
75373260	AMIQUERO GONZALES, Sarai Naydither	FEMENINO	saraiamiquero@esfapa.edu.pe	986404493	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70428206	CANCHARI ORTIZ, Brenda Anais	FEMENINO	brendacanchari@esfapa.edu.pe	932479018	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70665879	CARRASCO APCHO, Brigitte Natalie	FEMENINO	brigittecarrasco@esfapa.edu.pe	917129159	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70428118	CHINO ROJAS, Alisson Mireya	FEMENINO	alissonchino@esfapa.edu.pe	971299440	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70412211	CORAS CARRERA, Cielo Dayana	FEMENINO	cielocoras@esfapa.edu.pe	940098551	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70412210	CORAS CARRERA, Steve Fernando	MASCULINO	stevecoras@esfapa.edu.pe	925497221	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
76046040	ESPINO CURO, Eduardo	MASCULINO	eduardoespino@esfapa.edu.pe	916594712	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70393417	GOMEZ ATAUCUSI, Alex Cristhian	MASCULINO	alexgomes@esfapa.edu.pe	924241885	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
76176636	GUILLEN ALMANZA, Ronald Deivi	MASCULINO	ronaldguillen@esfapa.edu.pe	961375437	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
42472995	HUAYTALLA PONCE, Wilber	MASCULINO	wilberhuaytalla@esfapa.edu.pe	966042222	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
76006111	MARTINEZ ARANA, Walter Willy	MASCULINO	waltermartinez@esfapa.edu.pe	979875114	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
48669613	MORALES HUARACA,  Kevin Percy	MASCULINO	kevinmorales@esfapa.edu.pe	977142097	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70930761	MORALES RIVERA, Juan Carlos 	MASCULINO	juanmorales@esfapa.edu.pe	929439489	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
75756864	MUNAYLLA MARTINEZ, Roger Paulino	MASCULINO	rogermunaylla@esfapa.edu.pe	962230195	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
76046118	ORÉ ZAPATA, Kenyi Santiago 	MASCULINO	kenyiore@esfapa.edu.pe	929540507	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
62604963	PRADO CASTILLO, Deysi Brigitte	FEMENINO	deysiprado@esfapa.edu.pe	992513947	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
75246142	QUICHCA CANDIOTTI, Ani Yuliana	FEMENINO	aniquichca@esfapa.edu.pe	900913565	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
75007765	QUISPE HERRERAS, Orlando Anderson	MASCULINO	orlandoquispe@esfapa.edu.pe	989307713	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73978364	QUISPE PARIONA, David Cristhian	MASCULINO	davidquispe@esfapa.edu.pe	987357315	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73421634	RAMOS JAYO, Federico Danilo	MASCULINO	federicoramos@esfapa.edu.pe	966360534	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70793029	ROJAS QUISPE, Celso	MASCULINO	celsorojas@esfapa.edu.pe	929850175	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
77015493	SALCEDO HUARCAYA, Ely Flor	FEMENINO	elysalcedo@esfapa.edu.pe	913514091	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
80652629	SULCA CARBAJAL, Ronald	MASCULINO	ronaldsulca@esfapa.edu.pe	964527014	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
71328194	SULCA LAURENTE, Ungriela 	FEMENINO	ungrielasulca@esfapa.edu.pe	973369655	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
72210842	TERRY PACHECO, Camila Coral	FEMENINO	camilaterry@esfapa.edu.pe	928037458	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70416624	VILLANUEVA HUAYHUA, Luis Guillermo	MASCULINO	luisvillanueva@esfapa.edu.pe	955319236	I CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70447686	BARRIENTOS TUEROS, Yadir Edgar	MASCULINO	yadirbarrientos@esfapa.edu.pe	965338120	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70426839	BUSTAMANTE MENESES, Johan Brayhan	MASCULINO	johanbustamante@esfapa.edu.pe	958250835	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
71814472	DE LA CRUZ  VÁSQUEZ, Yulié Victor	MASCULINO	yuliedelacruz@esfapa.edu.pe	943091636	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
28216870	GARCIA HUAYTA, Nelva Ruth	FEMENINO	nelvagarcia@esfapa.edu.pe	974894596	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
61335183	HINOSTROZA CANCHARI, Angel	MASCULINO	angelhinostroza@esfapa.edu.pe	900644382	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
77693767	HUARCAYA PACOTAIPE, Jheral Fredy	MASCULINO	jheralhuarcaya@esfapa.edu.pe	998623874	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70397679	LAGOS SOTO, Denisse Rosario	FEMENINO	denisselagos@esfapa.edu.pe	993864646	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70046352	LUJAN JANAMPA, Ana Lucero	FEMENINO	analujan@esfapa.edu.pe	966664002	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
77495816	MENDOZA ESCALANTE, Nino Aldo	MASCULINO	ninomendoza@esfapa.edu.pe	927969959	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70426442	ORCON CUBA, Jhon Camilo	MASCULINO	jhonorcon@esfapa.edu.pe	935018881	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
75940572	PALOMINO CÁRDENAS, Sofía Jade	FEMENINO	sofiapalomino@esfapa.edu.pe	947065227	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70139121	PALOMINO QUISPE, Enma Flor	FEMENINO	enmapalomino@esfapa.edu.pe	967639225	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70454187	PARIONA ROJAS, Mequias Misael	MASCULINO	mequiaspariona@esfapa.edu.pe	917412578	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
73652225	PILLPE ARZAPALO, Lady Angela	FEMENINO	ladypillpe@esfapa.edu.pe	961092850	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
45020829	ROCA CURI, Leonardo Fabio	MASCULINO	leonardoroca@esfapa.edu.pe	939811574	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70214394	TERRY PACHECO, Joaquin Augusto	MASCULINO	joaquinterry@esfapa.edu.pe	931547751	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
77048447	TOVAR BERGARA, Leoncio	MASCULINO	leonciotovar@esfapa.edu.pe	976800603	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
70844985	VASQUEZ GONZALES, Franklin	MASCULINO	franklinvasquez@esfapa.edu.pe	934177904	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
75360387	ZAMORA MUNAYLLA, Cody Nicoll	FEMENINO	codyzamora@esfapa.edu.pe	930866170	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
76543837	ALVAREZ COLLANA, Judith Milagros	FEMENINO	judithalvarez@esfapa.edu.pe	928195232	III CICLO	ARTISTA PROFESIONAL /PINTURA
47888468	ARANGO MARTINEZ, Cinthia	FEMENINO	cinthiaarango@esfapa.edu.pe	944852296	III CICLO	ARTISTA PROFESIONAL /PINTURA
71196495	BARZOLA CISNEROS, Britney Joshelin	FEMENINO	britneybarzola@esfapa.edu.pe	958803714	III CICLO	ARTISTA PROFESIONAL /PINTURA
75872705	BAUTISTA ORE, Eddy	MASCULINO	eddybautista@esfapa.edu.pe	933170803	III CICLO	ARTISTA PROFESIONAL /PINTURA
78112282	CANCHARI CHACAS, Nayeli Maritza	FEMENINO	nayelicanchari@esfapa.edu.pe	925206213	III CICLO	ARTISTA PROFESIONAL /PINTURA
70205674	CANDIA MAGALLANES, Gian Marco	MASCULINO	giancandia@esfapa.edu.pe	962969190	III CICLO	ARTISTA PROFESIONAL /PINTURA
74640957	CHAUPIN MEDINA, Carlos Eduardo	MASCULINO	carloschaupin@esfapa.edu.pe	986963352	III CICLO	ARTISTA PROFESIONAL /PINTURA
74023708	CHUMBE TAYPE, Nahir Aixa Judy	FEMENINO	nahirchumbe@esfapa.edu.pe	967950820	III CICLO	ARTISTA PROFESIONAL /PINTURA
75227488	CUADROS HUAMAN, Flor De Victoria	FEMENINO	florcuadros@esfapa.edu.pe	995594248	III CICLO	ARTISTA PROFESIONAL /PINTURA
72420906	DIBURGA CUBA, Carla	FEMENINO	carladiburga@esfapa.edu.pe	916552913	III CICLO	ARTISTA PROFESIONAL /PINTURA
47598928	DONAIRES ROMERO, Angela Florisa 	FEMENINO	angeladonaires@esfapa.edu.pe	974634332	III CICLO	ARTISTA PROFESIONAL /PINTURA
73605391	GARCIA BAEZ, Jerald Junior	MASCULINO	jeraldgarcia@esfapa.edu.pe	975571317	III CICLO	ARTISTA PROFESIONAL /PINTURA
70917435	GUTIERREZ TORRES, Junior	MASCULINO	juniorgutierrez@esfapa.edu.pe	993791078	III CICLO	ARTISTA PROFESIONAL /PINTURA
48538962	HUACANTARA JUSCAMAITA, yenifer	FEMENINO	yeniferhuacantara@esfapa.edu.pe	928164168	III CICLO	ARTISTA PROFESIONAL /PINTURA
70865901	HUAYTALLA HUAMAN, Maricielo Rosa	FEMENINO	maricielohuaytalla@esfapa.edu.pe	914796451	III CICLO	ARTISTA PROFESIONAL /PINTURA
72502560	LOAYZA VALENZUELA, Anali	FEMENINO	analiloayza@esfapa.edu.pe	965309815	III CICLO	ARTISTA PROFESIONAL /PINTURA
74074356	LOPEZ SULCA, Carlos Junior	MASCULINO	carloslopez@esfapa.edu.pe	914407586	III CICLO	ARTISTA PROFESIONAL /PINTURA
70501568	MARMOLEJO CRIALES, Vicenzo Edgardo	MASCULINO	vicenzomarmolejo@esfapa.edu.pe	953579944	III CICLO	ARTISTA PROFESIONAL /PINTURA
77435275	MENDOZA PUCLLA, José Luis	MASCULINO	josemendoza@esfapa.edu.pe	928412970	III CICLO	ARTISTA PROFESIONAL /PINTURA
70453970	MENDOZA ROJAS, Mary Cruz	FEMENINO	marymendoza@esfapa.edu.pe	989447987	III CICLO	ARTISTA PROFESIONAL /PINTURA
70423853	OCHANTE RUA, Roy Ramiro	MASCULINO	royochante@esfapa.edu.pe	930210195	III CICLO	ARTISTA PROFESIONAL /PINTURA
46223703	ORELLANO JAIME, Miriam Edith	FEMENINO	miriamorellano@esfapa.edu.pe	987802619	III CICLO	ARTISTA PROFESIONAL /PINTURA
72709837	PACOTAIPE HUARHUACHI, Ronel Aldo	MASCULINO	ronelpacotaype@esfapa.edu.pe	916011989	III CICLO	ARTISTA PROFESIONAL /PINTURA
71390682	POZO SALVATIERRA, Susybel Miriam	FEMENINO	susybelpozo@esfapa.edu.pe	935077746	III CICLO	ARTISTA PROFESIONAL /PINTURA
70396851	QUISPE FLORES, Ivan Albino	MASCULINO	ivanquispe@esfapa.edu.pe	930544607	III CICLO	ARTISTA PROFESIONAL /PINTURA
74027789	QUISPE MUÑOZ, José Ángel	MASCULINO	josequispem@esfapa.edu.pe	979886148	III CICLO	ARTISTA PROFESIONAL /PINTURA
70473316	QUISPE QUISPE, Oscar Daniel	MASCULINO	oscarquispe@esfapa.edu.pe	949570728	III CICLO	ARTISTA PROFESIONAL /PINTURA
46563821	ROJAS GARCIA, Luis Victor   	MASCULINO	luisrojas@esfapa.edu.pe	964809147	III CICLO	ARTISTA PROFESIONAL /PINTURA
48103931	ROJAS LOZANO, Paulin Jover	MASCULINO	paulinrojas@esfapa.edu.pe	954089677	III CICLO	ARTISTA PROFESIONAL /PINTURA
72680416	SALAZAR CANDIA, Brayan Eduardo	MASCULINO	brayansalazar@esfapa.edu.pe	918218525	III CICLO	ARTISTA PROFESIONAL /PINTURA
70474918	TENORIO CARDENAS, Gina Jandira	FEMENINO	ginatenorio@esfapa.edu.pe	930797290	III CICLO	ARTISTA PROFESIONAL /PINTURA
70099888	VALDEZ GALVEZ, Marco Antonio	MASCULINO	marcovaldez@esfapa.edu.pe	930299674	III CICLO	ARTISTA PROFESIONAL /PINTURA
73591927	CUSI PACSI, Iam Gamaliel	MASCULINO	iamcusi@esfapa.edu.pe	916782532	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73883606	DELGADO  GUERRA, Luz Sanay	FEMENINO	luzdelgado@esfapa.edu.pe	913834763	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73866657	DIAZ PEÑA, VALERIA Stefany	FEMENINO	valeriadiaz@esfapa.edu.pe	956441994	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
74830525	FLORES SULCA, Jhonatan Junior	MASCULINO	jhonatanflores@esfapa.edu.pe	935627636	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73814575	HUACHACA OBANDO, Jenifer	FEMENINO	jeniferhuachaca@esfapa.edu.pe	985172190	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
74757733	INGA YUPANQUI, Adesenia	FEMENINO	adeseniainga@esfapa.edu.pe	948437322	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
42636691	LOZANO HUAMAN, Eva luz	FEMENINO	evalozano@esfapa.edu.pe	966110536	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70213015	MISAJEL QUISPE, Yeltsin Ruben	MASCULINO	yeltsinmisajel@esfapa.edu.pe	923787300	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
43920429	ORTEGA PICHARDO, Angela Luisa	FEMENINO	angelaortega@esfapa.edu.pe	948271445	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
76006113	QUISPE ARAUJO, Diego Alberto	MASCULINO	diegoquispe@esfapa.edu.pe	982206167	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
71286353	SULCA QUISPE, Zulma Naysi	FEMENINO	zulmasulca@esfapa.edu.pe	931444150	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70654608	YUPA HUAMAN, Franz Fray	MASCULINO	franzyupa@esfapa.edu.pe	916927045	III CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
72023529	HUACHO LLACCTAHUAMAN, Cristian Anderson	MASCULINO	cristianhuacho@esfapa.edu.pe	935124507	III CICLO	ARTISTA PROFESIONAL /ESCULTURA
70410733	SAIRE PALOMINO, Jherson Del Piero	MASCULINO	jhersonsaire@esfapa.edu.pe	988753305	III CICLO	ARTISTA PROFESIONAL /ESCULTURA
70036922	SULCA YARANGA, Kevin Anthony 	MASCULINO	kevinsulca@esfapa.edu.pe	978356732	III CICLO	ARTISTA PROFESIONAL /ESCULTURA
46921913	TANTA PEREZ, Benni Edoms	MASCULINO	bennitanta@esfapa.edu.pe	953485463	III CICLO	ARTISTA PROFESIONAL /ESCULTURA
72220586	TREJO ROJAS, Edwin Leonel	MASCULINO	edwintrejo@esfapa.edu.pe	964391402	III CICLO	ARTISTA PROFESIONAL /ESCULTURA
60804642	ACOSTA QUISPE, Kevin 	MASCULINO	kevinacosta@esfapa.edu.pe	940028406	V CICLO	ARTISTA PROFESIONAL /PINTURA
70107922	ALLCCA QUISPE, José Luis	MASCULINO	joseallcca@esfapa.edu.pe	917221058	V CICLO	ARTISTA PROFESIONAL /PINTURA
70049580	ARANGO GUTIERREZ, Meryl Madeleiny Eleny	FEMENINO	merylarango@esfapa.edu.pe	963782645	V CICLO	ARTISTA PROFESIONAL /PINTURA
70046382	BELLIDO ARAMBURU, Jimena Luz	FEMENINO	jimenabellido@esfapa.edu.pe	981670009	V CICLO	ARTISTA PROFESIONAL /PINTURA
70557651	CASTAÑEDA BAUTISTA, Edison	MASCULINO	edinsoncastaneda@esfapa.edu.pe	921689739	V CICLO	ARTISTA PROFESIONAL /PINTURA
71017664	CHAVEZ UNTIVEROS, Ángel	MASCULINO	angelchavez@esfapa.edu.pe	999686895	V CICLO	ARTISTA PROFESIONAL /PINTURA
70574296	CHOÑOCCA PARIONA, Victor Antonio	MASCULINO	victorchonocca@esfapa.edu.pe	924648404	V CICLO	ARTISTA PROFESIONAL /PINTURA
76538530	CHOQUECAHUA RAMIREZ, Gabriel Francisco	MASCULINO	gabrielchoquecahua@esfapa.edu.pe	926824834	V CICLO	ARTISTA PROFESIONAL /PINTURA
70121373	CHUQUITAYPE ARAUJO, Jersson	MASCULINO	jerssonchuquitaype@esfapa.edu.pe	949275488	V CICLO	ARTISTA PROFESIONAL /PINTURA
71552551	CONTRERAS CÓNDOR, Jean Henry	MASCULINO	jeancontreras@esfapa.edu.pe	935748875	V CICLO	ARTISTA PROFESIONAL /PINTURA
73757477	ESPEZA ENRIQUEZ, Eliseo	MASCULINO	eliseoespeza@esfapa.edu.pe	925273843	V CICLO	ARTISTA PROFESIONAL /PINTURA
74942873	HUAMAN ALLENDE, Ángel Gabriel	MASCULINO	angelhuaman@esfapa.edu.pe	928380320	V CICLO	ARTISTA PROFESIONAL /PINTURA
71005196	HUAMANÍ SANCHEZ, Keincinn Brayan	MASCULINO	keincinnhuamani@esfapa.edu.pe	925356989	V CICLO	ARTISTA PROFESIONAL /PINTURA
70665090	HUAMANTOMA PUMALLIHUA , Alexander	MASCULINO	alexanderhuamantoma@esfapa.edu.pe	901496960	V CICLO	ARTISTA PROFESIONAL /PINTURA
76640212	HUINCHO CLEMENTE, Cristhian Antony	MASCULINO	cristhianhuincho@esfapa.edu.pe	948813032	V CICLO	ARTISTA PROFESIONAL /PINTURA
60253867	LA SERNA PARIONA, Jackelin Nelly	FEMENINO	jackelinlaserna@esfapa.edu.pe	955198457	V CICLO	ARTISTA PROFESIONAL /PINTURA
73984445	MEDINA ANDÍA, Disney	FEMENINO	disneymedina@esfapa.edu.pe	947863696	V CICLO	ARTISTA PROFESIONAL /PINTURA
76670060	MEDRANO YARANGA, Mayumi Taquiri  	FEMENINO	mayumimedrano@esfapa.edu.pe	937485192	V CICLO	ARTISTA PROFESIONAL /PINTURA
72646288	NAVARRO MELLISHO, Luis  Ängel	MASCULINO	luisnavarro@esfapa.edu.pe	939604215	V CICLO	ARTISTA PROFESIONAL /PINTURA
73997977	ORE VALLEJOS, Ely  Dayme	MASCULINO	elyore@esfapa.edu.pe	900913997	V CICLO	ARTISTA PROFESIONAL /PINTURA
70413044	PORTAL QUISPE, Yudita Zoraida	FEMENINO	yuditaportal@esfapa.edu.pe	931017283	V CICLO	ARTISTA PROFESIONAL /PINTURA
71544540	QUISPE HUAMACCTO, Ronal Tiberio	MASCULINO	ronalquispe@esfapa.edu.pe	917224103	V CICLO	ARTISTA PROFESIONAL /PINTURA
71286342	SULCA QUISPE, Jeny Melisa	FEMENINO	jenysulca@esfapa.edu.pe	997909332	V CICLO	ARTISTA PROFESIONAL /PINTURA
70654287	VELAPATIÑO PINILLOS, Gabriela	FEMENINO	gabrielavelapatino@esfapa.edu.pe	931920457	V CICLO	ARTISTA PROFESIONAL /PINTURA
74143482	YUPANQUI CCONOJHUILLCA, Diego Ricardo 	MASCULINO	diegoyupanqui@esfapa.edu.pe	912561128	V CICLO	ARTISTA PROFESIONAL /PINTURA
76543149	ZAMAÑEZ MEJIA, Jhon	MASCULINO	jhonzamanez@esfapa.edu.pe	999293338	V CICLO	ARTISTA PROFESIONAL /PINTURA
73681986	ARIAS MELGAR, Evelyn Lizzeth	FEMENINO	evelynarias@esfapa.edu.pe	943662571	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70784847	CONDORI RIMACHI, Rosita Rosmery	FEMENINO	rositacondori@esfapa.edu.pe	962561633	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
62227482	CORONADO ORELLANA, Manuel Martin	MASCULINO	manuelcoronado@esfapa.edu.pe	926509249	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
71902513	CURI GAMBOA, Ivan Cruz	MASCULINO	ivancuri@esfapa.edu.pe	953169524	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70207680	DIAZ ALFARO, Aldy Roship	FEMENINO	aldydiaz@esfapa.edu.pe	926449055	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
75416648	FLORES AUCACIO, Jairol Ramiro	MASCULINO	jairolflores@esfapa.edu.pe	981752649	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
72260316	GARCIA MEJIA, Camila Sthefany	FEMENINO	camilagarcia@esfapa.edu.pe	988033979	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
74626657	JIMENEZ HUAMAN, Leonardo José	MASCULINO	leonardojimenez@esfapa.edu.pe	941920302	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
74471081	LOPEZ GUARDAMINO, Frank Josue	MASCULINO	franklopez@esfapa.edu.pe	975373841	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
74391079	RODRIGUEZ SULCA, Richer Victor	MASCULINO	richerrodriguez@esfapa.edu.pe	957764609	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70217936	YARANGA HUAMAN, Zanya Angelina	FEMENINO	zanyayaranga@esfapa.edu.pe	966461908	V CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
47081853	CCAICO GALVEZ, Jonathan Roberth	MASCULINO	jonathanccaico@esfapa.edu.pe	967908025	V CICLO	ARTISTA PROFESIONAL /ESCULTURA
71882508	FERNANDEZ BERMUDO, Gino Render	MASCULINO	ginofernandez@esfapa.edu.pe	914366024	V CICLO	ARTISTA PROFESIONAL /ESCULTURA
74466320	AGUILAR YUCRA, Filadelfia Ibeth	FEMENINO	filadelfiaaguilar@esfapa.edu.pe	965476997	VII CICLO	ARTISTA PROFESIONAL /PINTURA
62691679	ARAUJO PALOMINO, Wendy Angela	FEMENINO	wendyaraujo@esfapa.edu.pe	939590290	VII CICLO	ARTISTA PROFESIONAL /PINTURA
72223803	BALVIN RAMOS, Celeste Marisol	FEMENINO	celestebalvin@esfapa.edu.pe	999181992	VII CICLO	ARTISTA PROFESIONAL /PINTURA
77689738	BORDA DIAZ, Luis Anthony	MASCULINO	luisborda@esfapa.edu.pe	966706404	I CICLO	ARTISTA PROFESIONAL /PINTURA
47138453	CASTRO PIZARRO, Giovanni Khael	MASCULINO	giovannicastro@esfapa.edu.pe	910662853	VII CICLO	ARTISTA PROFESIONAL /PINTURA
73245481	FERNANDEZ LICAS, Jhomar Elvis	MASCULINO	jhomarfernandez@esfapa.edu.pe	925091724	VII CICLO	ARTISTA PROFESIONAL /PINTURA
70119369	HUARANCCA HUAYHUA, Miguel Angel	MASCULINO	miguelhuarancca@esfapa.edu.pe	922895162	VII CICLO	ARTISTA PROFESIONAL /PINTURA
72275796	HUINCHO CHOCCE, Fernando José	MASCULINO	fernandohuincho@esfapa.edu.pe	965449206	VII CICLO	ARTISTA PROFESIONAL /PINTURA
75088316	INFANTE LEVA, Diana 	FEMENINO	dianainfante@esfapa.edu.pe	930507590	VII CICLO	ARTISTA PROFESIONAL /PINTURA
75235444	NIETO PALMA, Josep Steven	MASCULINO	josephnieto@esfapa.edu.pe	924644754	VII CICLO	ARTISTA PROFESIONAL /PINTURA
70207653	QUISPE HINOSTROZA, Angela Marycielo	FEMENINO	angelaquispe@esfapa.edu.pe	966806380	VII CICLO	ARTISTA PROFESIONAL /PINTURA
48553878	RUIZ ÑAUPA, Willd J	MASCULINO	willdruiz@esfapa.edu.pe	940340660	VII CICLO	ARTISTA PROFESIONAL /PINTURA
000898069	SALDAÑA SOUSA, Castor	MASCULINO	castorsaldana@esfapa.edu.pe	949055331	VII CICLO	ARTISTA PROFESIONAL /PINTURA
70117967	TAPAHUASCO SULCA, Marcelo Giacomo	MASCULINO	marcelotapahuasco@esfapa.edu.pe	992466362	VII CICLO	ARTISTA PROFESIONAL /PINTURA
70230828	TUTAYA BENDEZU, Ivan Antonelli	MASCULINO	ivantutaya@esfapa.edu.pe	973221186	VII CICLO	ARTISTA PROFESIONAL /PINTURA
76027504	VELASQUEZ VEGA, NinfaThalia	FEMENINO	ninfavelasquez@esfapa.edu.pe	996754691	VII CICLO	ARTISTA PROFESIONAL /PINTURA
74325558	CIPRIAN CARDENAS, Mónica	MASCULINO	monicaciprian@esfapa.edu.pe	961087108	VII CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
44742214	CURI AVILES, Nelson 	FEMENINO	nelsoncuri@esfapa.edu.pe	999220440	VII CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70397678	SALAZAR PIZARRO, Jose Maria David	MASCULINO	josesalazar@esfapa.edu.pe	912027792	VII CICLO	ARTISTA PROFESIONAL /ESCULTURA
72952722	MOLINA VEGA, José Luis	MASCULINO	josemolina@esfapa.edu.pe	982801492	VII CICLO	ARTISTA PROFESIONAL /ESCULTURA
72212524	CCENCHO CURACA, Martin Rolando	MASCULINO	martinccencho@esfapa.edu.pe	914039269	IX CICLO	ARTISTA PROFESIONAL /PINTURA
70172224	FLORES BLANCO, Susan Marjhory	FEMENINO	susanflores@esfapa.edu.pe	993219234	IX CICLO	ARTISTA PROFESIONAL /PINTURA
48086354	GAVILAN SIERRA, Natalia Isabel	FEMENINO	nataliagavilan@esfapa.edu.pe	961079602	IX CICLO	ARTISTA PROFESIONAL /PINTURA
71092594	GONZALEZ POMA, Judith Milagros 	FEMENINO	yudithgonzales@esfapa.edu.pe	940100885	IX CICLO	ARTISTA PROFESIONAL /PINTURA
80074962	NIETO ALVA, Moises Emiliano	MASCULINO	moisesnieto@esfapa.edu.pe	921118003	IX CICLO	ARTISTA PROFESIONAL /PINTURA
72089445	MENDOZA HILARIO, Roy Rony	MASCULINO	roymendoza@esfapa.edu.pe	966782459	IX CICLO	ARTISTA PROFESIONAL /PINTURA
46376546	PACHECO LÓPEZ, Favio Daniel 	MASCULINO	faviopacheco@esfapa.edu.pe	970273471	IX CICLO	ARTISTA PROFESIONAL /PINTURA
70390277	PAUCAR CARDENAS, Joel Alfredo	MASCULINO	joelpaucar@esfapa.edu.pe	974665743	IX CICLO	ARTISTA PROFESIONAL /PINTURA
70601901	PILLACA CANCHARI, Luz Aurora	FEMENINO	luzpillaca@esfapa.edu.pe	917224189	IX CICLO	ARTISTA PROFESIONAL /PINTURA
47403717	ESPINOZA CARHUAPOMA, Edwin	MASCULINO	edwinespinoza@esfapa.edu.pe	933884986	IX CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73617766	LIMA INFANZON, Mariela Francis	FEMENINO	marielalima@esfapa.edu.pe	966015100	IX CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
74030914	LUJAN MENDOZA, Jusbe Luii	MASCULINO	jusbelujan@esfapa.edu.pe	991777346	IX CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
70397697	OCHOA BUSTOS, Bryan Manuel	MASCULINO	bryanochoa@esfapa.edu.pe	934570654	IX CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
73874326	QUISPE SILVA, Catherine Monica	FEMENINO	catherinequispe@esfapa.edu.pe	999052037	IX CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
46432093	BLAS SOSA, Ronal Jose	MASCULINO	ronalblas@esfapa.edu.pe	916132333	IX CICLO	ARTISTA PROFESIONAL /ESCULTURA
70419398	HUAMAN PALOMINO, Jose Nelson	MASCULINO	josehuaman@esfapa.edu.pe	926694381	IX CICLO	ARTISTA PROFESIONAL /ESCULTURA
77686280	RAMOS AYALA, Carlos Michel	MASCULINO	carlosramos@esfapa.edu.pe	901181015	I CICLO	ARTISTA PROFESIONAL /ESCULTURA
45884966	QUISPE SUPÑO, José	MASCULINO	josequispe@esfapa.edu.pe	927113746	VII CICLO	ARTISTA PROFESIONAL /PINTURA
46107262	URBAY TRUJILLANO, Carlos	MASCULINO	carlosurbay@esfapa.edu.pe	940045951	V CICLO	ARTISTA PROFESIONAL /PINTURA
70108325	CURASMA LUCAS, Aldo Cleocel	MASCULINO	aldocurasma@esfapa.edu.pe	925207008	III CICLO	ARTISTA PROFESIONAL /PINTURA
010102485	PAULA CORRENTI, Ana	FEMENINO	anapaula@esfapa.edu.pe	921324742	I CICLO	ARTISTA PROFESIONAL /PINTURA
70798951	CORAS QUISPE, Ruth Yulissa	FEMENINO	ruthquispe@esfapa.edu.pe	966560930	I CICLO	EDUCACIÓN ARTÍSTICA
76573686	PEREZ PALOMINO, Fritsa Yasmina	FEMENINO	fritsaperez@esfapa.edu.pe	940885797	VI CICLO	EDUCACIÓN ARTÍSTICA
77037041	ESCALANTE ORIHUELA, Luz keyla	FEMENINO	luzescalante@esfapa.edu.pe	955435394	VIII CICLO	EDUCACIÓN ARTÍSTICA
73952880	TUDELANO VICAÑA,Lisseth	FEMENINO	lissethtudelano@esfapa.edu.pe	934975233	VI CICLO	ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO
76153339	LAPA HUARACA, Anderson Erick	MASCULINO	adersonlapa@esfapa.edu.pe	950482425	VII CICLO	ARTISTA PROFESIONAL /PINTURA
77686280	RAMOS AYALA, Carlos Michel	MASCULINO	carlosramos@esfapa.edu.pe	901181015	I CICLO	ARTISTA PROFESIONAL /ESCULTURA



db.users.insertMany(
[
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
{name:"", email: "", password: "", dni:"", rol:"3", sexo:"", celular:"", ciclo:"", foto:"", createdAt: ISODate("2022-04-16T17:10:46.123Z"), updatedAt: ISODate("2022-04-17T02:19:45.629Z")},
],
)



*/
