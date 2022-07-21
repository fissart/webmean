
//cursos de P-IX
//student id only
db.users.find({password:{$in:
  [
    "72212524",
    "70172224",
    "48086354",
    "71092594",
    "80074962",
    "72089445",
    "46376546",
    "70390277",
    "70601901",
]
}},{_id:1}).pretty()


{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f3b") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f3c") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f3d") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f3e") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f3f") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f40") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f41") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f42") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f43") }

db.curses.find({ciclo:"IX", especialidad: "P" },{_id:1, user:1}).pretty()//6

db.integers.insertMany([
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f3b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f3c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f3d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f3e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f3f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f40"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f41"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f42"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c66"), user:ObjectId("62d6dac1d89e8b2b50ea9f43"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f3b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f3c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f3d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f3e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f3f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f40"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f41"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f42"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9c"), user:ObjectId("62d6dac1d89e8b2b50ea9f43"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f3b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f3c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f3d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f3e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f3f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f40"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f41"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f42"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb6"), user:ObjectId("62d6dac1d89e8b2b50ea9f43"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f3b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f3c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f3d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f3e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f3f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f40"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f41"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f42"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc1"), user:ObjectId("62d6dac1d89e8b2b50ea9f43"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f3b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f3c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f3d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f3e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f3f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f40"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f41"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f42"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce7"), user:ObjectId("62d6dac1d89e8b2b50ea9f43"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f3b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f3c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f3d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f3e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f3f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f40"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f41"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f42"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf8"), user:ObjectId("62d6dac1d89e8b2b50ea9f43"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
])






//cursos de G-IX
db.users.find({password:{$in:
  [
  "47403717",
  "73617766",
  "74030914",
  "70397697",
  "73874326",
]
}},{_id:1}).pretty()


{ "_id" : ObjectId("") }
{ "_id" : ObjectId("") }
{ "_id" : ObjectId("") }
{ "_id" : ObjectId("") }
{ "_id" : ObjectId("") }


db.curses.find({ciclo:"IX", especialidad: "G" },{_id:1, user:1}).pretty()//7

//curso1{

db.integers.insertMany([
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6f"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6f"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6f"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6f"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6f"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9d"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9d"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9d"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9d"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c9d"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca6"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca6"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca6"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca6"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca6"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb7"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb7"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb7"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb7"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb7"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc2"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc2"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc2"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc2"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc2"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce8"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce8"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce8"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce8"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ce8"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf9"), user: ObjectId("62d6dac1d89e8b2b50ea9f44"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf9"), user: ObjectId("62d6dac1d89e8b2b50ea9f45"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf9"), user: ObjectId("62d6dac1d89e8b2b50ea9f46"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf9"), user: ObjectId("62d6dac1d89e8b2b50ea9f47"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf9"), user: ObjectId("62d6dac1d89e8b2b50ea9f48"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
])







//cursos de E-IX
db.users.find({password:{$in:
  [
  "46432093",
  "70419398",
]
}},{_id:1}).pretty()


{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f49") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f4a") }


db.curses.find({ciclo:"IX", especialidad: "E" },{_id:1, user:1}).pretty()//6


db.integers.insertMany([
{curse : ObjectId("62d6d8b4131619ed72f21c9e"), user: ObjectId("62d6dac1d89e8b2b50ea9f49") , "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
{curse : ObjectId("62d6d8b4131619ed72f21c9e"), user: ObjectId("62d6dac1d89e8b2b50ea9f4a") , "userteach" : ObjectId("62cf3499f1443acd8c3dc426")},
{curse : ObjectId("62d6d8b4131619ed72f21cb8"), user: ObjectId("62d6dac1d89e8b2b50ea9f49") , "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
{curse : ObjectId("62d6d8b4131619ed72f21cb8"), user: ObjectId("62d6dac1d89e8b2b50ea9f4a") , "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
{curse : ObjectId("62d6d8b4131619ed72f21cc3"), user: ObjectId("62d6dac1d89e8b2b50ea9f49") , "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{curse : ObjectId("62d6d8b4131619ed72f21cc3"), user: ObjectId("62d6dac1d89e8b2b50ea9f4a") , "userteach" : ObjectId("62cf3499f1443acd8c3dc42c")},
{curse : ObjectId("62d6d8b4131619ed72f21ce4"), user: ObjectId("62d6dac1d89e8b2b50ea9f49") , "userteach" : ObjectId("62cf3499f1443acd8c3dc431")},
{curse : ObjectId("62d6d8b4131619ed72f21ce4"), user: ObjectId("62d6dac1d89e8b2b50ea9f4a") , "userteach" : ObjectId("62cf3499f1443acd8c3dc431")},
{curse : ObjectId("62d6d8b4131619ed72f21ce9"), user: ObjectId("62d6dac1d89e8b2b50ea9f49") , "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
{curse : ObjectId("62d6d8b4131619ed72f21ce9"), user: ObjectId("62d6dac1d89e8b2b50ea9f4a") , "userteach" : ObjectId("62cf3499f1443acd8c3dc432")},
{curse : ObjectId("62d6d8b4131619ed72f21cfa"), user: ObjectId("62d6dac1d89e8b2b50ea9f49") , "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
{curse : ObjectId("62d6d8b4131619ed72f21cfa"), user: ObjectId("62d6dac1d89e8b2b50ea9f4a") , "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
])
