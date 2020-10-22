
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
--create this table after the top three tables so the data can properly connect
CREATE TABLE "room_plant" (
  "plant_id" INT NOT NULL,
  "room_id" INT NOT NULL,
    FOREIGN KEY (plant_id)
    REFERENCES "plant" (id),
    FOREIGN KEY (room_id)
    REFERENCES "room" (id)
    ON DELETE CASCADE
);

--test values
--register a user

INSERT INTO "room" ("user_id", "room_name", "light", "humidity")
VALUES
(1, 'Living Room', 5, 3),
(1, 'Bedroom', 3, 6),
(1, 'Office', 6, 1),
(1, 'Kitchen', 2, 4),
(1, 'Bathroom', 1, 2),
(1, 'Balcony', 3, 3);

INSERT INTO "plant" ("id", "plant_name", "plant_img", "ph_min" , "ph_max" , "light" , "toxicity" , "temp_min" , "temp_max" , "soil_humidity" , "favorite" )
VALUES
(130506, 'Male Fern', 'https://bs.floristic.org/image/o/954e9fa90630070a2652502b37bdc6b41b00d128', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(295418, 'Bilberry cactus', 'https://bs.floristic.org/image/o/4dbe015c71c20ef1fc3858faf7c29b288be140eb', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(295588, 'Pineapple Cactus', 'https://bs.floristic.org/image/o/7742b8592ee86d9166158a4d76ef29ffe8bad573', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(539764, 'Pearl Echeveria', 'https://bs.floristic.org/image/o/b98bbdf2069a3528b7e65d82407bb6b9efb4a145', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(102136, 'Basil Thyme', 'https://bs.floristic.org/image/o/fab2b1c856e708af00a655a3b780e69f0d33addb', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(187941, 'Lemon Thyme', 'https://bs.floristic.org/image/o/5ecd9d5ea561ce96195d0ef55478c7ad0f7a66b7', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(178385, 'Kitchen Sage', 'https://bs.floristic.org/image/o/ba565945528a0f63276ac76495e7e1cd3d47e127', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(188075, 'Giant Airplant', 'https://bs.floristic.org/image/o/374337566a9e7786a46244f96504d350869ae72d', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(183248, 'Peace Lily', 'https://bs.floristic.org/image/o/75a1c264295a0f3ec1f613f397c249ecc4840d38', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(147740, 'Broadleaved Lavender', 'https://bs.floristic.org/image/o/e0bff466321605b8d3c67b6507c4211ad8a2f4c1', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(120157, 'Spider Plant', 'https://bs.floristic.org/image/o/fa07d5d829363794d9dfb2ba1e5ec897fe02779c', 4.5, 8, 4, 'medium', 52, 112, 3, false),
(182512, 'Garden Tomato', 'https://bs.floristic.org/image/o/400851a79391dbe6f667c66e4bf70299e9921853', 4.5, 8, 4, 'medium', 52, 112, 3, false)


INSERT INTO "room_plant" ("room_id", "plant_id")
VALUES
(1, 295588),
(1, 539764),
(1, 295418),
(2, 183248),
(3, 120157),
(4, 102136),
(4, 187941),
(4, 178385),
(5, 188075),
(5, 539764),
(6, 182512);

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

--deletes selected room from db
DELETE FROM "room"
WHERE "room"."id" = $1;
DELETE FROM "room_plant"
WHERE "room_plant"."room_id" = $1;
