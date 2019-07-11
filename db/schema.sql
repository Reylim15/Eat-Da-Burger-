
-- Copy from cats to fill db
create datavvase if not exists  burgers-db


CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
rey rey