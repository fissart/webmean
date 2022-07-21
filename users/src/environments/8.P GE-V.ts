//cursos de P-V

//student id only
db.users.find({password:{$in:
  [
"60804642",
"70107922",
"70049580",
"70046382",
"70557651",
"71017664",
"70574296",
"76538530",
"70121373",
"71552551",
"73757477",
"74942873",
"71005196",
"70665090",
"76640212",
"60253867",
"73984445",
"76670060",
"72646288",
"73997977",
"70413044",
"71544540",
"71286342",
"46107262",
"70654287",
"74143482",
"76543149",
]
}},{_id:1}).pretty()



{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f00") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f01") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f02") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f03") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f04") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f05") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f06") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f07") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f08") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f09") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f0a") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f0b") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f0c") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f0d") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f0e") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f0f") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f10") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f11") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f12") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f13") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f14") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f15") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f16") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f17") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f18") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f19") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f4d") }


27*8=216
//cursos "userteach"
db.curses.find({ciclo:"V", especialidad: "P"},{_id:1, user:1}).pretty()//8



db.integers.insertMany([
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
  {"curse" : ObjectId("62d6d8b4131619ed72f21c61"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c62"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c69"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21c79"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cbe"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cca"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cf5"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f00"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f01"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f02"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f03"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f04"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f05"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f06"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f07"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f08"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f09"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f0f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f10"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f11"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f12"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f13"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f14"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f15"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f16"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f17"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f18"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f19"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
          {"curse" : ObjectId("62d6d8b4131619ed72f21cfc"), user:  ObjectId("62d6dac1d89e8b2b50ea9f4d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
])


//cursos de G-V
//student id -- solo _id.
db.users.find({password:{$in:
  [
    "73681986",
    "70784847",
    "62227482",
    "71902513",
    "70207680",
    "75416648",
    "72260316",
    "74626657",
    "74471081",
    "74391079",
    "70217936",
]
}},{_id:1}).pretty()

{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f1a") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f1b") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f1c") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f1d") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f1e") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f1f") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f20") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f21") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f22") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f23") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f24") }


//curso1 (un ususario puede tener varios "curse" cursos "userteach")9 cursos
db.curses.find({ciclo:"V", especialidad: "G" },{_id:1, user:1}).pretty()//9

db.integers.insertMany([
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c63"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7a"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c81"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc421")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ca4"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cbf"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccb"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cd9"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf6"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f1a"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f1b"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f1c"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f1d"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f1e"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f1f"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f20"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f21"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f22"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f23"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfd"),user:ObjectId("62d6dac1d89e8b2b50ea9f24"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
])


//cursos de E-V

//student id -- solo _id.
db.users.find({password:{$in:
  [
    "47081853",
    "71882508",
]
}},{_id:1}).pretty()


{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f25") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f26") }

  db.curses.find({ciclo:"V", especialidad: "E" },{_id:1, user:1}).pretty()//8

db.integers.insertMany([
{"curse" : ObjectId("62d6d8b4131619ed72f21c64"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c64"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc418")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7b"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c7b"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc41f")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cc0"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cc0"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccc"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ccc"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cda"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cda"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ce6"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc431")},
{"curse" : ObjectId("62d6d8b4131619ed72f21ce6"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc431")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf7"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cf7"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfe"),user:ObjectId("62d6dac1d89e8b2b50ea9f25"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
{"curse" : ObjectId("62d6d8b4131619ed72f21cfe"),user:ObjectId("62d6dac1d89e8b2b50ea9f26"),"userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
])
