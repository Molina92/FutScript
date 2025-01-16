-- Active: 1729855615076@@127.0.0.1@5432@futscript@public
CREATE DATABASE futscript;
\c futscript;

CREATE TABLE equipos (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id), name VARCHAR(250), position INT REFERENCES posiciones(id));

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');

select * from posiciones;

SELECT * FROM equipos;

SELECT * FROM jugadores;

INSERT INTO equipos (id, name) VALUES
(DEFAULT, 'Real Madrid'),
(DEFAULT, 'Barcelona'),
(DEFAULT, 'Manchester United'),
(DEFAULT, 'Bayern Munich'),
(DEFAULT, 'Juventus');

INSERT INTO jugadores (id, id_equipo, name, position) VALUES
(DEFAULT, 1, 'Karim Benzema', 1),      -- Real Madrid, delantero
(DEFAULT, 1, 'Luka Modric', 2),       -- Real Madrid, centrocampista
(DEFAULT, 1, 'David Alaba', 3),       -- Real Madrid, defensa
(DEFAULT, 1, 'Thibaut Courtois', 4),  -- Real Madrid, portero
(DEFAULT, 2, 'Robert Lewandowski', 1),-- Barcelona, delantero
(DEFAULT, 2, 'Pedri Gonzalez', 2),    -- Barcelona, centrocampista
(DEFAULT, 2, 'Jules Koundé', 3),      -- Barcelona, defensa
(DEFAULT, 3, 'Marcus Rashford', 1),   -- Manchester United, delantero
(DEFAULT, 3, 'Bruno Fernandes', 2),   -- Manchester United, centrocampista
(DEFAULT, 3, 'Raphaël Varane', 3);    -- Manchester United, defensa


