# Analisis y Diseño 1 Grupo 7

- 201503723	Bryan Gustavo López Echeverría
- 201212763	Dannek Ivan Miranda López
- 201504399	María de Los Angeles Herrera Sumalé
- 201404215	Jorge Luis Salazar Peralta


## https://drive.google.com/drive/folders/1zDg-LJ_vK-W69F90w4ZvUZQF5eFtjRz1?usp=sharing


## Server Node
### Apartado de Usuarios
#### Creacion de usuario
- Para el apartado de usuarios se definieron varios metodos para su utilizacion, iniciando con el metodo de creacion de usuario.
  
  Para este metodo se definio la ruta (Metodo POST) **http://localhost:3000/user/create**, al cual se le enviará un json con la siguiente estructura:

  `
    {
         "Username" :"Prue",
         "Nombres"  :"Usuario Prueba",
         "Apellidos":"PruebaPrueba",
         "Correo":"prueba@prueba.com",
         "Password":"123456789",
         "Genero":"M",
         "Fecha_Nacimiento":"2020-12-12",
         "rol":1
    }
  `
  Donde el rol se manejara desde el lado del cliente asumiendo que cuando se realiza un registro por defecto se enviara rol **3** Asociandolo al rol **Cliente**, el resto de campos se llenaran automaticamente.