# Países - Aplicación web

## Descripción

La aplicación web Países proporciona información detallada sobre los países del mundo. Puedes obtener datos como el nombre del país, código ISO, capital, población, y más. Esta aplicación es ideal para usuarios que necesitan acceder a datos geográficos y demográficos.

## Características

- Listado de países: Obtén una lista completa de todos los países.

- Información detallada de un país: Obtén datos detallados sobre un país específico.

- Gestión de países: Añade, elimina o modifica la lista de países disponibles.

## Endpoints

### Rutas de Vistas HTML

- **Ver lista de países:**

  `GET /paises`

  Respuesta:

  Devuelve una página HTML con la lista de países.

  <!-- ```json
  [
    {
      "_id": "1",
      "name": { "official": "República Argentina", "common": "Argentina" },
      "capital": "Buenos Aires",
      "borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
      "area": 2780400,
      "population": 45195774,
      "gini": {
        "2019": 42.9
      }
    },
    {
      "_id": "2",
      "name": { "official": "República de Colombia", "common": "Colombia" },
      "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
      "area": 1141748,
      "population": 50882884,
      "gini": {
        "2018": 51.3
      }
    } // Más países...
  ]
  ``` -->

- **Añadir un país:**

  `GET /paises/agregar`

  Respuesta:

  Devuelve una página html con un formulario para añadir un nuevo país a la base de datos.

- **Editar un país:**

  `GET /paises/:id/editar`

  Respuesta:

  Devuelve una página HTML con los detalles del país especificado y un formulario para modificar la información del mismo.

- **Ver información de contacto:**

  `GET /contacto`

  Respuesta:

  Devuelve una página HTML con la información de contacto.

- **Ver detalles "Acerca de":**

  `GET /acerca-de`

  Respuesta:

  Devuelve una página HTML con la información "Acerca de"

### Instalación

#### Clonar el repositorio

```
git clone https://github.com/tu-usuario/countries-api.git cd countries-api
```

#### Instalar Dependencias

```
npm install

```

#### Configuración

```
PORT=3000
DATABASE_URL=your_mongo_database_url
```

#### Ejecutar el Proyecto

```
npm start
```

### Uso

Puedes probar los endpoints usando herramientas como Postman o cURL. Asegúrate de que el servidor esté ejecutándose en el puerto especificado (por defecto 3000).

### Contacto

Autor: Matias Damián Sanchez Romero

Email: matiasdsanchezr@gmail.com
