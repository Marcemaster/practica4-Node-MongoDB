# Práctica 4 WEB-API / Node.js / MongoDB

En esta práctica desarrollamos el API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.

El servicio contiene anuncios de compra o venta de artículos y permite filtrar anuncios por varios criterios (Nombre, venta, precio, tags.)

## Comenzando 🚀

_Para probar el proyecto únicamente es necesario instalar las dependencias con el comando:_

```
npm install
```

_A continuación cargamos la base de datos a través del script de inicialización_

```
node initDB.mjs
```

_Por último, corremos la App con el comando:_

```
nodemon app.js
```

## Funcionamiento ⚙️

_Con el servidor corriendo podemos acceder a la ruta:_

http://localhost:3000

_para ver un listado de todos los anuncios cargados desde el instalador._

_Esta lista de anuncios podemos fitrarla a través de la barra de navegación utilizando cualquiera de los siguientes filtros:_

* **limit** // Limitar el nº de anuncios
* **sort** // Ordenar
* **nombre** // Filtrar por nombre 
* **skip** // Saltar anuncios
* **precioMin** // Poner un precio mínimo
* **precioMax** // Poner un precio máximo
* **tags** // Filtrar por etiquetas
* **venta** // Filtrar por producto en venta o en búsqueda

### Rutas 🖇️

_También podemos acceder directamente a al API con la ruta _

http://localhost:3000/api/anuncios

_La cual nos devuelve un JSON con todos los anuncios (También podemos aplicar los filtros)_

### Ejemplo de peticiones con filtros ⌨️




## Construido con 🛠️

* Node
* MongoDB
* Express
* EJS

## Autor ✒️

* **Marcelo Hornillos**

Práctica del Bootcamp Keepcoding Fullstack Web 12º Edición