//cursos de ED-IX

//student id only
db.users.find({password:{$in:
  [
    "70050622",
    "71298601",
    "76562326",
    "74421228",
    "70207656",
    "70830465",
    "70152062",
    "70426976",
    "28315608",
    "71886369",
    "70057888",
    "78546043",
    "70653536",
    "70054537",
    "70152188",
    "70418404",
    "46888208",
    "70977332",
    "70690489",
    "73984253",
    "46361915",
    "60540589",
    "70565911",
    "70818722",
]
}},{_id:1}).pretty()


{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e5c") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e5d") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e5e") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e5f") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e60") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e61") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e62") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e63") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e64") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e65") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e66") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e67") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e68") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e69") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e6a") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e6b") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e6c") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e6d") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e6e") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e6f") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e70") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e71") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e72") }
{ "_id" : ObjectId("62d6dac1d89e8b2b50ea9e73") }

//cursos "userteach"
db.curses.find({ciclo:"IX", especialidad: "ED"},{_id:1,user:1}).pretty()

db.integers.insertMany([
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e60"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e61"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e62"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e63"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e64"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e65"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e66"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e67"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e68"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e69"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e70"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e71"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e72"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
{"curse" : ObjectId("62d6d8b4131619ed72f21c77"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e73"), "userteach" : ObjectId("62cf3499f1443acd8c3dc41e")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e60"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e61"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e62"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e63"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e64"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e65"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e66"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e67"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e68"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e69"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e70"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e71"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e72"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21c94"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e73"), "userteach" : ObjectId("62cf3499f1443acd8c3dc424")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e60"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e61"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e62"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e63"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e64"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e65"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e66"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e67"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e68"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e69"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e70"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e71"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e72"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cba"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e73"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42b")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e60"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e61"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e62"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e63"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e64"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e65"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e66"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e67"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e68"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e69"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e70"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e71"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e72"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21cc7"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e73"), "userteach" : ObjectId("62cf3499f1443acd8c3dc42d")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e5f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e60"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e61"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e62"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e63"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e64"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e65"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e66"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e67"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e68"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e69"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6a"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6b"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6c"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6d"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6e"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e6f"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e70"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e71"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e72"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
        {"curse" : ObjectId("62d6d8b4131619ed72f21d00"), "user" : ObjectId("62d6dac1d89e8b2b50ea9e73"), "userteach" : ObjectId("62cf3499f1443acd8c3dc434")},
])
