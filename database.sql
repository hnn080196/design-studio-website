create database studio;
use studio;
drop table if exists admin;
create table admin(
    username varchar(255) primary key ,
    password varchar(2048),
    lastLogin datetime,
    lastActive datetime
);

drop table if exists project;
create table project(
    id int auto_increment primary key ,
    title varchar(2000),
    subTitle varchar(2000),
    content text,
    images text,
    status int,
    type int,
    createdAt datetime,
    createdBy varchar(255),
    modifiedAt datetime,
    modifiedBy varchar(255)
);