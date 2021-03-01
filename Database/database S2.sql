--create database ayd1g7;
use ayd1g7;

create table Proveedor(
	id int not null auto_increment primary key,
    nombre varchar(50) not null,
	direccion varchar(50) not null,
	telefono varchar(12) not null,
	nombre_contacto varchar(10) 	
    
);

describe Proveedor;


