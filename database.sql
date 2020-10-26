
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--create database named "planter"

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (80) UNIQUE NOT NULL
);

CREATE TABLE "room" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "room_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "plant" (
    "id" SERIAL PRIMARY KEY,
    "room_id" INT,
    "plant_name" VARCHAR (80) NOT NULL,
    "plant_img" VARCHAR,
    "last_watered" DATE
);

--test values
--register a user

INSERT INTO "room" ("user_id", "room_name")
VALUES
(1, 'Living Room'),
(1, 'Bedroom'),
(1, 'Second Bedroom'),
(1, 'Kitchen'),
(1, 'Bathroom'),
(1, 'Balcony');

INSERT INTO "plant" ( "room_id", "plant_name", "plant_img", "last_watered")
VALUES
(6, 'Small String of pearls', 'https://i.imgur.com/8sngrWt.jpg', '2020/9/15'),
(1, 'Aloe', 'https://i.imgur.com/Lejsw69.jpg', '2020/10/20'),
(5, 'Air Plant', 'https://i.imgur.com/VZBeOpH.jpg', '2020/10/25'),
(1, 'ZZ Plant', 'https://i.imgur.com/CKOa6tU.jpg', '2020/10/23'),
(1, 'Big String of pearls', 'https://i.imgur.com/Qlo3HrH.jpg', '2020/10/23'),
(3, 'English Ivy', 'https://i.imgur.com/GDrEmcd.jpg', '2020/10/22'),
(1, 'Ti Plant', 'https://i.imgur.com/ULpMv4E.jpg', '2020/10/20'),
(1, 'Fig', 'https://i.imgur.com/Jb0rqKT.jpg', '2020/10/18'),
(2, 'Spring Cactus', 'https://i.imgur.com/tKMVaGT.jpg', '2020/10/15'),
(3, 'Peace Lily', 'https://i.imgur.com/5FSjfSx.jpg', '2020/10/20'),
(1, 'Literal Spider Plant', 'https://www.northcountrypublicradio.org/news/images/JforJumpingSpider_840.jpg', '2020/10/23'),
(1, 'Snake Plant', 'https://i.imgur.com/73mEUll.jpg', '2020/10/22'),
(4, 'Polka Dot Plant', 'https://i.imgur.com/r0yitP1.jpg', '2020/10/23');


--shows coorisponding user id and room name
SELECT "user"."id" as "user",
	"room"."room_name" as "room"
FROM "room"
JOIN "user" ON "user"."id" = "room"."user_id";

--selects user room and plant
SELECT "user"."id" as "user", 
"room"."room_name" as "room", 
"plant"."plant_name" as "plant"
FROM "user"
JOIN "room" ON "user"."id" = "room"."user_id"
JOIN "plant" ON "room"."id" = "plant"."room_id";

--add
WHERE "user"."id" = `$1`

--gets plant image and name for logged in user
SELECT  "plant"."plant_img" as "image",
  "plant"."plant_name" as "plant",
  "plant"."id" as "id"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  JOIN "plant" ON "plant"."room_id" = "room"."id"
  WHERE "user"."id" = $1;


--gets user's rooms
  SELECT  "room"."room_name" as "room"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  WHERE "user"."id" = $1;


