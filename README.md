# MyTinerary - Jesús Vera Pompa - BackEnd

## **Pasos para Visualizar el Proyecto**

-   [1 - Ejecutamos por Consola para Limpiar la memoria caché en NPM](#1---Ejecutamos-por-Consola-para-Limpiar-la-memoria-caché-en-NPM)
-   [2 - Ejecutamos por Consola para Instalar las Dependencias](#2---Ejecutamos-por-Consola-para-Instalar-las-Dependencias)
-   [3 - Crear un Archivo en el directorio Raiz llamado env y agregar adentro del archivo lo siguiente](#3---Crear-un-Archivo-en-el-directorio-Raiz-llamado-env-y-agregar-adentro-del-archivo-lo-siguiente)
-   [4 - Ejecutamos por Consola para Subir los Datos a la Base de Datos](#4---Ejecutamos-por-Consola-para-Subir-los-Datos-a-la-Base-de-Datos)
-   [5 - Ejecutamos por Consola para Iniciar el Servidor](#5---Ejecutamos-por-Consola-para-Iniciar-el-Servidor)
-   [6 - Consultas en Postman de Cities](#6---Consultas-en-Postman-de-Cities)

---

### **1 - Ejecutamos por Consola para Limpiar la memoria caché en NPM**

```
npm cache clear --force
```

---

### **2 - Ejecutamos por Consola para Instalar las Dependencias**

```
npm install
```

---

### **3 - Crear un Archivo en el directorio Raiz llamado .env y agregar adentro del archivo lo siguiente**

```
.env
```
```
PORT = 8080
// quitar {} y completa los datos
URI_MONGO = "mongodb+srv://{usuarioMongo}:{contraseña}@{nombreBaseDatos}.w9lh8.mongodb.net/my_tinerary"
```

---

### **4 - Ejecutamos por Consola para Subir los Datos a la Base de Datos**

#### - Cargamos los datos de la Cities y luego tecleamos Control+C y luego S

```
npm run dataCities
```

---

### **5 - Ejecutamos por Consola para Subir los Datos a la Base de Datos**

#### - Cargamos los datos de la Itinerary y luego tecleamos Control+C y luego S

```
npm run dataItineraries
```

---

### **6 - Ejecutamos por Consola para Iniciar el Servidor**

```
npm run dev
```

---
