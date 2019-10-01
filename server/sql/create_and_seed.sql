create database hca;
use hca;

create table USER (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	USER_NAME 	varchar(255) NOT NULL, 
	PASSWORD	     varchar(255) NOT NULL,
	EMAIL 		varchar(255) NOT NULL,
	IS_ADMIN	     smallint(1) NOT NULL DEFAULT 0,
	createdAt      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (USER_NAME),
	PRIMARY KEY(ID)
);

#INSERT INTO User (user_name, password, email, is_admin) VALUES ('Admin', 'password', 'admin@test.com', 1);
#INSERT INTO User (user_name, password, email, is_admin) VALUES ('Foobar', 'password123', 'foobar@test.com', 0);
#INSERT INTO User (user_name, password, email, is_admin) VALUES ('Bizbaz', 'password456', 'bizbaz@test.com', 0);

#SELECT * FROM user;
#SELECT * FROM user WHERE is_admin = 1;
#SELECT * FROM user WHERE user_name = 'Foobar';