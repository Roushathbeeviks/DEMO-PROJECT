-- CREATE QUERY

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
    UNIQUE(email)
);

-- INSERT QUERY

INSERT INTO users(userid,firstname,lastname,email,contactnumber,role,password)
values('admin.a','admin','admin','admin123@gmail.com','9898976554','admin','admin@123');