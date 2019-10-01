#MySQL example for ref only, not to be used in this App

drop database DEMO;
create database DEMO;
use DEMO;

CREATE TABLE USER (
       ID INT (11) NOT NULL AUTO_INCREMENT
     , USER_NAME VARCHAR(100) NOT NULL
     , PASSWORD VARCHAR(100) NOT NULL
	 , createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
	 , updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
     , PRIMARY KEY (ID)
);

CREATE TABLE USER (
       ID INT (11) NOT NULL AUTO_INCREMENT
     , MANUFACTURER_ID INT (11) NOT NULL
     , MODEL VARCHAR(25) NOT NULL
     , YEAR VARCHAR(4) NOT NULL
     , MSRP VARCHAR(6) NOT NULL
	 , createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
	 , updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
     , UNIQUE UQ_AUTO_1 (MODEL, YEAR)
     , PRIMARY KEY (ID)
     , CONSTRAINT FK_AUTO_1 FOREIGN KEY (MANUFACTURER_ID)
                            REFERENCES MANUFACTURER (ID)
);

insert into manufacturer (name) values ('Tesla');
insert into manufacturer (name) values ('Porche');

insert into automobile (manufacturer_id, model, year, msrp) values (1, 'Model S', '2014', '38,500');
insert into automobile (manufacturer_id, model, year, msrp) values (1, 'Model S', '2019', '81,500');
insert into automobile (manufacturer_id, model, year, msrp) values (1, 'Model 3', '2019', '45,000');
insert into automobile (manufacturer_id, model, year, msrp) values (1, 'Model X', '2016', '64,500');
insert into automobile (manufacturer_id, model, year, msrp) values (1, 'Model X', '2019', '82,500');

insert into automobile (manufacturer_id, model, year, msrp) values (2, '718', '2019', '56,900');
insert into automobile (manufacturer_id, model, year, msrp) values (2, '911', '2019', '97,400');
insert into automobile (manufacturer_id, model, year, msrp) values (2, 'Cayman', '2019', '86,300');



#SELECT * FROM manufacturer;
#SELECT * FROM manufacturer WHERE id = 1;
#SELECT * FROM manufacturer WHERE name = 'Tesla';
#SELECT name FROM manufacturer WHERE id = 1;
#SELECT id FROM manufacturer WHERE name = 'Tesla';

#SELECT * FROM automobile;
#SELECT * FROM automobile WHERE manufacturer_id = 1;

#SELECT * FROM automobile WHERE  manufacturer_id in (SELECT id FROM manufacturer WHERE name = 'Tesla');
#SELECT id, model, year, msrp FROM automobile WHERE  manufacturer_id in (SELECT id FROM manufacturer WHERE name = 'Porche');

#INSERT INTO automobile (manufacturer_id, model, year, msrp) VALUES (2, 'Macan', '2019', '49,900');
#SELECT * FROM automobile;

#UPDATE automobile SET msrp = '50,500' WHERE manufacturer_id = 2 AND model = 'Macan';
#SELECT * FROM automobile;

#DELETE FROM automobile WHERE manufacturer_id = 2 AND model = 'Macan';
#SELECT * FROM automobile;
 