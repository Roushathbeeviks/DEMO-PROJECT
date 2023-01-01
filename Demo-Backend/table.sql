-- CREATE QUERY FOR USER

create table users
(
    Userid varchar(200) NOT NULL,
    firstname varchar(200) NOT NULL,
    lastname varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    contactnumber varchar(20),
    role varchar(200) NOT NULL,
    password varchar(200) NOT NULL,
    PRIMARY KEY (Userid),
    UNIQUE(email),
    Id INT AUTO_INCREMENT UNIQUE,
);

-- INSERT QUERY FOR USER

INSERT INTO users(userid,firstname,lastname,email,contactnumber,role,password)
values('admin.a','admin','admin','admin123@gmail.com','9898976554','admin','admin@123');


-- CREATE QUERY FOR VOYAGE PLAN

create table voyageplan
(
    StartPortname varchar(255) NOT NULL,
    DestinationPortname varchar(255) NOT NULL,
    Cosplat decimal(65) NOT NULL,
    cosplong decimal(65) NOT NULL,
    Eosplat decimal(65) NOT NULL,
    Eosplong decimal(65) NOT NULL,
    Cosptime TIMESTAMP NOT NULL,
    Displacement INT(100) NOT NULL,
    FuelDensity INT(100) NOT NULL,
    LowerCalorific INT(100),
    EarliestETA TIMESTAMP NOT NULL,
    JustTimeETA  TIMESTAMP NOT NULL
);


-- INSERT QUERY FOR VOYAGE PLAN
insert into voyageplan ( StartPortname,
        DestinationPortname,
        Cosplat ,
        Cosplong,
        Eosplat,
        Eosplong,
        Cosptime,
        Displacement ,
        FuelDensity,
        LowerCalorific,
        EarliestETA,
        JustTimeETA )
values('Japan','China','1.23','1.4','3.4','3.8','2023-02-03 09:03','1000','200','400','2023-02-03 09:03','2023-02-03 09:03');

-- CREATE QUERY FOR VOYAGE PATH(STARTING AND DESTINATION)
create table voyagepath(
    StartPortname varchar(255) NOT NULL,
    DestinationPortname varchar(255) NOT NULL,
)



-- INSERT QUERY FOR VOYAGE PATH
insert into voyagepath( StartPortname,DestinationPortname)values('Japan','China');
