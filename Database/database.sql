create database ayd1g7;
use ayd1g7;

create table product(
	id int not null auto_increment primary key,
    nombre varchar(50),
    descripcion varchar(150),
    precio int
);

describe product;