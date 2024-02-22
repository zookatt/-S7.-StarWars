# Star Wars Api

## Ejercicio 1 - Vizualizacion de la lista de naves

Creando el contexto UseApiContext.jsx, componentes Headers.jsx y List.jsx.

Se realiza la llamada ala Api de Starwars([swapi.](https://swapi.py4e.com/)) para obtener el listado de las naves espaciales con los datos nesesarios: Nombre de la nave y Modelo.

## Ejercicio 2 - Creacion de la ficha de cada nave

El usuario/a podrá acceder a los detalles de cada nave clicando en cada una de ellas a través del listado.
En el contexto, la logica desarrollava para obtener la imagen de cada nave de la web [starwars-visulaguide](https://starwars-visualguide.com/).
La imagen de cada nave dispone de un id que coincide con id de nace espacial de swapi. Asi, si el usuario selecciona la nave con funcion handleClick, se le abre su ficha con l;a imagen de esta nave. Algunas naves no tienen imagen.

## Ejercicio 3 - Boton "viev more" para cargar mas naves

La api de naves inicialmente carda solo 10 primeros naves de primera pagina. Para poder ver mas, implemente la logica la funcion de handleNextPage para poder cargar mas naves guardando la informacion de la pagina anterior(uso de spread operator "...").

## Ejercicio 4 - Maquietacion

Maquetacion realizada acorde estilod de la pagina web oficial de Starwars.

## Ejercicio 5 - Pagina Home con React Router

Mediante un botón, HOME se podrá acceder a la página principal de naves y STARSHIPS lleva a la lista de naves.

## Ejercicio 6 - Login y Registro

Instalacion de Firebase para gestion de autenticacion de los usuarios. Creacion de componentes Login.jsx y SignUp.jsx.
Requisitos cumplidos:

- Un usuario/a no puede registrarse con el mismo email.
- Una vez regístrate el usuario/a debe aparecer logado.

## Ejercicio 7 - Rutas protegidas con React Router

-El listado de naves sólo puede ser visible por usuarios/as registrados, en el caso del proyecto se trata de la ruta '/starships'.
Si un usuario no registrado quiera acceder a un contenido protegido por un guarda, el sistema le lleve al '/login'. Una vez realizado el login correctamente, se redirige automáticamente a la página donde quería acceder inicialmente, '/starships'.

Se ha creado nuevo componente "ProtectedRoutes.jsx" donde esta guardada la logica para poder acceder a la lista de naves en caso de estar logado. Si el usuario no esta logado, el sistema se lo redirige a la pagina de '/login/, y una vez logado puede acceder a todas las rutas, mediante del componente <Outlet/> de "react-router-dom".
