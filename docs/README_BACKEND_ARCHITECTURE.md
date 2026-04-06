# README - Backend Architecture

## Objetivo
Documentar la arquitectura del backend y el flujo de una solicitud HTTP para facilitar mantenimiento, depuracion y onboarding.

## Estructura principal
- `backend/server.js`: punto de entrada del servidor.
- `backend/routes/`: definicion de endpoints por recurso.
- `backend/controllers/`: capa de coordinacion de casos de uso.
- `backend/repositories/`: acceso a datos y consultas SQL.
- `backend/config/db.js`: inicializacion y configuracion de conexion a base de datos.
- `backend/middleware/auth.js`: validacion de autenticacion para rutas protegidas.

## Flujo de una solicitud
1. La solicitud entra por `server.js` y se enruta por `routes/index.js`.
2. La ruta delega en un controlador especifico (por ejemplo `EventosController`).
3. El controlador valida parametros, transforma entrada/salida y llama al repositorio.
4. El repositorio ejecuta consultas y retorna resultados normalizados.
5. El controlador construye la respuesta HTTP y el middleware maneja errores comunes.

## Convenciones tecnicas recomendadas
- Mantener separacion estricta entre controladores y repositorios.
- Evitar logica SQL dentro de controladores.
- Reutilizar `BaseController` y `BaseRepository` para reducir duplicacion.
- Centralizar validaciones de autenticacion/autorizacion en middleware.

## Riesgos comunes
- Duplicar logica entre `EventosRepository.js` y `EventosRepository_new.js`.
- Introducir respuestas HTTP inconsistentes entre controladores.
- Ejecutar cambios de esquema sin scripts de verificacion asociados.

## Checklist de mantenimiento
- Verificar rutas publicas vs protegidas antes de desplegar.
- Revisar que nuevas consultas tengan indices adecuados en base de datos.
- Acompanhar cambios de API con documentacion tecnica en README.
