# Proyecto Web en Angular

## Integrantes del equipo

- [x] [@Lleoz](https://discordapp.com/users/476574369229832203)
- [x] [@josue.samano](https://discordapp.com/users/335850826318741506)
- [x] [@Vladimir Cabrera](https://discordapp.com/users/683745689892815043)
- [x] [@Romer](https://discordapp.com/users/702955480267358329)
- [x] [@portusan](https://discordapp.com/users/717776768244908053)
- [x] [@RiojasMx](https://discordapp.com/users/201813752356536320)
- [x] [@programando.ideas](https://discordapp.com/users/716354253081542666)

## Video
Video demo: [Prueba del cliente y api](https://youtu.be/1rJqbYze7-4)

------------
# Instalación del entorno de trabajo para ejecutar el proyecto
Guía para poder instalar las herramientas necesarias para ejecutar el proyecto.
### 1. Software requerido
- [x] [GIT](https://git-scm.com/downloads) (opcional)
- [x] [Node.js](https://nodejs.org/es/)
- [x] [vsCode](https://code.visualstudio.com/) (opcional)

### 2. Ejecutar el proyecto
- **Descargar e inicializar el proyecto**
  - `git clone https://github.com/Lleoz/proyectoLogin.git`
  - `cd proyectoLogin`
  - `npm install`
- **Configuración del entorno**
	- Abrir el archivo **src\environments\environment.ts** y setear la url para que apunte a la [API](https://github.com/Lleoz/SegundoEjercicio) hecha en .net core:
		- `urlApiUsers: 'http://10.0.0.4:45459/api/'`
    - [Configuración del proyecto API](https://github.com/Lleoz/SegundoEjercicio#2-ejecutar-el-proyecto)
- **Ejecución**
  - `ng serve -o`
------------

## División del trabajo

Son 4 vistas:

- **Login:**
    - Nombre del componente: login
    - A cargo de: Riojas
    - Nombre del Brach: Riojas
- **Registro**
    - Nombre del componente: registro
    - A cargo de: 
    - Nombre del Brach:
    
- **Listado usuarios**
    - Nombre del componente: listarUsuarios
    - A cargo de: Programando Ideas
    - Nombre del Brach: feature/user-edit
- **Editar usuario**
    - Nombre del componente: editarUsuario
    - A cargo de: Programando Ideas
    - Nombre del Brach: feature/user-edit 
    
## Generalidades
- Cada modulo tiene sus propios CCS. Evitar usar el style.css por posibles conflictos.
- Cada desarrollador va a crear la rama que va a trabajar dependiendo de la vista a trabajar y solo editará los archivos de su vista.
- En caso de tener que trabajar sobre otra vista, deberá soliitarlo por el chat para evitar errores al realizar el merge.



