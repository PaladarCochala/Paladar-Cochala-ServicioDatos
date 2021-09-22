CREATE DATABASE paladar_cochalo;


CREATE TABLE restaurante(
    restaurante_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    ubicacion VARCHAR(255),
    promedio_sabor VARCHAR(255),
    promedio_servicio VARCHAR(255)
);