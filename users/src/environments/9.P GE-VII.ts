//cursos de P-VII
db.users.find({ password : {$in:
  [
    "74466320",
    "62691679",
    "72223803",
    "47138453",
    "73245481",
    "70119369",
    "72275796",
    "75088316",
    "75235444",
    "45884966",
    "70207653",
    "48553878",
    "00089806",
    "70117967",
    "70230828",
    "76027504",
]
}},{_id:1}).pretty()

// student id generado por el comando anterior

{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f27") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f28") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f29") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f2b") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f2c") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f2d") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f2e") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f2f") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f30") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f31") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f32") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f33") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f34") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f35") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f36") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f4c") }



db.curses.find({ciclo:"VII", especialidad: "P" },{_id:1, user:1}).pretty()//7

db.integers.insertMany([
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c65"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc419")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c68"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6e"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41c")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd0"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdb"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cee"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f27"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f28"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f29"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f2f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f30"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f31"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f32"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f33"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f34"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f35"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f36"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf2"),  user: ObjectId("62d6dac1d89e8b2b50ea9f4c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
      ])






//cursos de G-VII
db.curses.find({ciclo:"VII", especialidad: "G" },{_id:1, user:1}).pretty()//8

db.integers.insertMany([
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6c"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c6c"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c96"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc425")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c96"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc425")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca5"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21ca5"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc427")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb4"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cb4"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42a")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd1"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cd1"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdc"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cdc"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc430")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cef"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cef"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf3"), user: ObjectId("62d6dac1d89e8b2b50ea9f37"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cf3"), user: ObjectId("62d6dac1d89e8b2b50ea9f38"), "userteach" : ObjectId("62cf3499f1443acd8c3dc433")},
])

//student id only
db.users.find({password:{$in:
  [
    "74325558",
    "44742214",
]
}},{_id:1}).pretty()

// student id generado por el comando anterior
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f37") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f38") }


//E-VII

db.integers.insertMany(
  [
        {curse : ObjectId("62d6d8b4131619ed72f21c6d"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc41b")},
        {curse : ObjectId("62d6d8b4131619ed72f21c6d"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc41b")},
        {curse : ObjectId("62d6d8b4131619ed72f21c97"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc425")},
        {curse : ObjectId("62d6d8b4131619ed72f21c97"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc425")},
        {curse : ObjectId("62d6d8b4131619ed72f21cb2"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc429")},
        {curse : ObjectId("62d6d8b4131619ed72f21cb2"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc429")},
        {curse : ObjectId("62d6d8b4131619ed72f21cd2"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc42e")},
        {curse : ObjectId("62d6d8b4131619ed72f21cd2"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc42e")},
        {curse : ObjectId("62d6d8b4131619ed72f21cdd"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc430")},
        {curse : ObjectId("62d6d8b4131619ed72f21cdd"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc430")},
        {curse : ObjectId("62d6d8b4131619ed72f21cf0"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc433")},
        {curse : ObjectId("62d6d8b4131619ed72f21cf0"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc433")},
        {curse : ObjectId("62d6d8b4131619ed72f21cf4"), user:ObjectId("62d6dac1d89e8b2b50ea9f39"), userteach : ObjectId("62cf3499f1443acd8c3dc433")},
        {curse : ObjectId("62d6d8b4131619ed72f21cf4"), user:ObjectId("62d6dac1d89e8b2b50ea9f3a"), userteach : ObjectId("62cf3499f1443acd8c3dc433")},
        ],
)


"_id" : ObjectId("62d6d8b4131619ed72f21c6d"),            "user" : ObjectId("62cf3499f1443acd8c3dc41b")
"_id" : ObjectId("62d6d8b4131619ed72f21c97"),            "user" : ObjectId("62cf3499f1443acd8c3dc425")
"_id" : ObjectId("62d6d8b4131619ed72f21cb2"),            "user" : ObjectId("62cf3499f1443acd8c3dc429")
"_id" : ObjectId("62d6d8b4131619ed72f21cd2"),            "user" : ObjectId("62cf3499f1443acd8c3dc42e")
"_id" : ObjectId("62d6d8b4131619ed72f21cdd"),            "user" : ObjectId("62cf3499f1443acd8c3dc430")
"_id" : ObjectId("62d6d8b4131619ed72f21cf0"),            "user" : ObjectId("62cf3499f1443acd8c3dc433")
"_id" : ObjectId("62d6d8b4131619ed72f21cf4"),            "user" : ObjectId("62cf3499f1443acd8c3dc433")


db.curses.find({ciclo:"VII", especialidad: "E" },{_id:1, user:1}).pretty()//7

db.users.find({password:{$in:
  [
    "70397678",
    "72952722",
]
}},{_id:1}).pretty()

// student id generado por el comando anterior


{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f39") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9f3a") }
