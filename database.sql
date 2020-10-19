
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
    "room_name" VARCHAR (80) NOT NULL,
    "light" INT,
    "humidity" INT
);

CREATE TABLE "plant" (
    "id" SERIAL PRIMARY KEY,
    "plant_name" VARCHAR (80),
    "plant_img" VARCHAR,
    "ph_min" INT,
    "ph_max" INT,
    "light" INT,
    "toxicity" VARCHAR,
    "temp_min" INT,
    "temp_max" INT,
    "soil_humidity" INT,
    "favorite" BOOLEAN
);

CREATE TABLE "room_plant" (
    "room_id" INT,
    "plant_id" INT
);

--test values
--register two users

INSERT INTO "room" ("user_id", "room_name", "light", "humidity")
VALUES
(1, 'test room', 5, 3),
(2, 'second test room', 3, 6),
(2, 'third test room', 6, 1),
(1, 'fourth test room', 2, 4),
(3, 'fifth room', 1, 2),
(3, 'sixth room', 3, 3),
(3, 'seventh room', 7, 4);

INSERT INTO "plant" ("plant_name", "plant_img", "ph_min" , "ph_max" , "light" , "toxicity" , "temp_min" , "temp_max" , "soil_humidity" , "favorite" )
VALUES
('test plant', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*', 4.5, 8, 4, 'medium', 52, 112, 3, false),
('second test plant', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*', 4.5, 8, 4, 'medium', 52, 112, 3, true),
('third test plant', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*', 4.5, 8, 4, 'medium', 52, 112, 3, true),
('fourth test plant', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*', 4.5, 8, 4, 'medium', 52, 112, 3, false),
('fifth test plant', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*', 4.5, 8, 4, 'medium', 52, 112, 3, false);

INSERT INTO "room_plant" ("room_id", "plant_id")
VALUES
(1, 1),
(3, 2),
(2, 3),
(4, 4),
(1, 5),
(5, 2),
(6, 4),
(7, 1);

INSERT INTO "user" ("username", "password", "email")
VALUES
('test1', 'hahaha', 'test1@test.com'),
('test2', 'hahaha', 'test2@test.com');


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
JOIN "room_plant" ON "room"."id" = "room_plant"."room_id"
JOIN "plant" ON "plant"."id" = "room_plant"."plant_id";

--add
WHERE "user"."id" = `$1`

--gets plant image and name for logged in user
SELECT  "plant"."plant_img" as "image",
  "plant"."plant_name" as "plant",
  "plant"."id" as "id"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  JOIN "room_plant" ON "room"."id" = "room_plant"."room_id"
  JOIN "plant" ON "plant"."id" = "room_plant"."plant_id"
  WHERE "user"."id" = $1;


--gets user's rooms
  SELECT  "room"."room_name" as "room"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  WHERE "user"."id" = $1;

--gets user's favorite plants
SELECT  "plant"."plant_img" as "image",
  "plant"."plant_name" as "plant",
  "plant"."id" as "id",
  "plant"."favorite" as "favorite"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  JOIN "room_plant" ON "room"."id" = "room_plant"."room_id"
  JOIN "plant" ON "plant"."id" = "room_plant"."plant_id"
  WHERE "user"."id" = $1
  AND "plant"."favorite" = true;