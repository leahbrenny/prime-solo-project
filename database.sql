
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
    "room_name" VARCHAR (80) NOT NULL,
    "light" INT,
    "humidity" INT
);

CREATE TABLE "user_room" (
    "user_id" INT,
    "room_id" INT
);

CREATE TABLE "plant" (
    "id" INT,
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
INSERT INTO "user" ("username", "password", "email")
VALUES
('tester', 'testing', 'tester@test.com');

INSERT INTO "room" ("room_name", "light", "humidity")
VALUES
('test room', 5, 3);

INSERT INTO "plant" ("id", "plant_name", "plant_img", "ph_min" , "ph_max" , "light" , "toxicity" , "temp_min" , "temp_max" , "soil_humidity" , "favorite" )
VALUES
(423071, 'test plant', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*', 4.5, 8, 4, 'medium', 52, 112, 3, false);

INSERT INTO "user_room" ("user_id", "room_id")
VALUES
(1, 1);

INSERT INTO "room_plant" ("room_id", "plant_id")
VALUES
(1, 423071);

--shows just user_id and room_id
SELECT 
	"user"."id" as "user_id", 
	"room"."id" as "room_id" 
FROM "users_room"
JOIN "user" 
	ON "user"."id" = "user_room"."user_id"
JOIN "room"
	ON "room"."id" = "user_room"."room_id";