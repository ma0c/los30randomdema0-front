# Los 30 random de ma0 Front

Si, basicamente el front (mal hecho, obviamente por mi) de los30randomdema0-back que si está bien hecho

## Correr el proyecto

Estoy usando nvm

```shell
nvm use 20.1.15
```

Instalar

```shell
npm install
```

Correr

```shell
npm start
```

Compilar el proyecto para producción

```shell
npm run build
```

Usamos variables de entorno, así que asegurate de tener un archivo `.env` en la raiz del proyecto con las siguientes variables

```shell
REACT_APP_BASE_URL=http://localhost:8000
```

Y el backend corriendo en `http://localhost:8000`

Publicar app

```shell
cd build
aws s3 sync . s3://los30randomdema0.com
```

> Asegurate de tener las credenciales en el archivo `.envrc`