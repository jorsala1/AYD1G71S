create database ayd1g7;
use ayd1g7;

create table product(
	id int not null auto_increment primary key,
    nombre varchar(50),
    descripcion varchar(150),
    precio int
);

describe product;


/*Por si les llegara a dar un problema de autenticacion se resuelve de esta manera*/
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'propio_password';
-- flush privileges;

/*------------------------------------------------------------------------------------------------------*/
-- creacion de tabla Rol
create table Rol(
	CodigoRol int not null auto_increment primary key,
    Nombre varchar(100) not null
);

-- insert into Rol values(1,'Admin');
-- insert into Rol values(2,'User');
-- insert into Rol values (3,'Client');
-- select * from Rol;


/*------------------------------------------------------------------------------------------------------*/
-- creacion tabla usuario
create table Usuario(
	CodigoUsuario int not null auto_increment primary key,
    Username varchar (50) not null,
    Nombres varchar (50) not null,
    Apellidos varchar (50) not null,
    Correo varchar (50) not null,
    Password varchar (50) not null,
    Genero char not null,
    Fecha_Nacimiento date not null,
    Fecha_Registro timestamp default current_timestamp not null, 
    Fecha_Vencimiento date  default (DATE_ADD(NOW(),INTERVAL 20 DAY)) not null,
    rol int not null,
    foreign key (rol) references Rol(CodigoRol)
);
-- select * from Usuario;


-- Creacion tabla proveedores
create table Proveedor(
	id int not null auto_increment primary key,
    nombre varchar(50) not null,
	direccion varchar(50) not null,
	telefono varchar(12) not null,
	nombre_contacto varchar(50) 	
    
);

describe Proveedor;

/*Ingreso de primer dato para verificacion desde workbench*/
-- insert into Proveedor values (1,'Proveedor1','direccion 1','123456789','Contacto');