
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
(1, 'Office'),
(1, 'Kitchen'),
(1, 'Bathroom'),
(1, 'Balcony');

INSERT INTO "plant" ( "room_id", "plant_name", "plant_img")
VALUES
(3, 'Male Fern', 'https://bs.floristic.org/image/o/954e9fa90630070a2652502b37bdc6b41b00d128'),
(1, 'Bilberry cactus', 'https://bs.floristic.org/image/o/4dbe015c71c20ef1fc3858faf7c29b288be140eb'),
(1, 'Pineapple Cactus', 'https://bs.floristic.org/image/o/7742b8592ee86d9166158a4d76ef29ffe8bad573'),
(5, 'Pearl Echeveria', 'https://bs.floristic.org/image/o/b98bbdf2069a3528b7e65d82407bb6b9efb4a145'),
(4, 'Basil Thyme', 'https://bs.floristic.org/image/o/fab2b1c856e708af00a655a3b780e69f0d33addb'),
(4, 'Lemon Thyme', 'https://bs.floristic.org/image/o/5ecd9d5ea561ce96195d0ef55478c7ad0f7a66b7'),
(4, 'Kitchen Sage', 'https://bs.floristic.org/image/o/ba565945528a0f63276ac76495e7e1cd3d47e127'),
(5, 'Giant Airplant', 'https://bs.floristic.org/image/o/374337566a9e7786a46244f96504d350869ae72d'),
(2, 'Peace Lily', 'https://bs.floristic.org/image/o/75a1c264295a0f3ec1f613f397c249ecc4840d38'),
(3, 'Broadleaved Lavender', 'https://bs.floristic.org/image/o/e0bff466321605b8d3c67b6507c4211ad8a2f4c1'),
(1, 'Spider Plant', 'https://bs.floristic.org/image/o/fa07d5d829363794d9dfb2ba1e5ec897fe02779c'),
(6, 'Garden Tomato', 'https://bs.floristic.org/image/o/400851a79391dbe6f667c66e4bf70299e9921853');


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


