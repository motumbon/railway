# Despliegue en Railway - Instrucciones Detalladas

## Paso 1: Verificar Estructura del Repositorio

**IMPORTANTE**: Asegúrate que tu repositorio de GitHub tenga esta estructura:
```
tu-repositorio/
├── package.json          ← DEBE estar en la raíz
├── server.js             ← DEBE estar en la raíz
├── index.html
├── styles.css
├── script.js
├── api.js
├── indexedDB.js
├── favicon.ico
└── data/                 ← Carpeta se creará automáticamente
```

## Paso 2: Conectar GitHub con Railway (DETALLADO)

### 2.1 Crear cuenta en Railway
1. **Ir a [railway.app](https://railway.app)**
2. **Clic en "Login"** (esquina superior derecha)
3. **Seleccionar "Continue with GitHub"**
4. **Autorizar Railway** en GitHub (permitir acceso a repositorios)

### 2.2 Crear nuevo proyecto
1. **En Railway Dashboard, clic "New Project"**
2. **Seleccionar "Deploy from GitHub repo"**
3. **Si no aparecen repositorios:**
   - Clic en "Configure GitHub App"
   - Seleccionar tu cuenta de GitHub
   - Elegir "All repositories" o seleccionar el repositorio específico
   - Clic "Install & Authorize"

### 2.3 Seleccionar repositorio
1. **Buscar tu repositorio** en la lista
2. **Clic en el repositorio** del proyecto
3. **Railway iniciará el deploy automáticamente**

## Paso 3: Verificar Detección Automática

Railway debe detectar:
- ✅ `package.json` en la raíz → Instala dependencias
- ✅ Script `"start": "node server.js"` → Ejecuta servidor
- ✅ Puerto automático → Usa `process.env.PORT`

## Paso 4: Solución si NO detecta archivos

### Si Railway no detecta package.json:
1. **Verificar que `package.json` esté en la RAÍZ del repositorio**
2. **NO debe estar en subcarpetas**
3. **Hacer commit y push si moviste archivos**

### Si Railway no inicia el servidor:
1. **Ir a tu proyecto en Railway**
2. **Pestaña "Settings"**
3. **Sección "Deploy"**
4. **Custom Start Command**: `node server.js`
5. **Clic "Update"**

## Paso 5: Variables de Entorno (Importante)

1. **En tu proyecto Railway → pestaña "Variables"**
2. **Agregar estas variables:**
   - `NODE_ENV` = `production`
   - `JWT_SECRET` = `tu-clave-secreta-aqui-cambiar`
3. **Clic "Add" para cada variable**

## Paso 4: Variables de Entorno (Opcional)

Si necesitas configurar variables:
1. **Ir a tu proyecto en Railway**
2. **Pestaña "Variables"**
3. **Agregar variables necesarias**

## Paso 5: Base de Datos (Opcional)

Para persistencia real con PostgreSQL:
1. **En tu proyecto Railway**
2. **Clic en "New Service"**
3. **Seleccionar "PostgreSQL"**
4. **Railway generará URL de conexión automáticamente**

## Paso 6: Acceder a tu App

1. **Railway generará una URL automáticamente**
2. **Formato: `https://tu-proyecto.up.railway.app`**
3. **Tu app estará disponible 24/7**

## Ventajas de Railway

- ✅ **Persistencia real** - Datos se mantienen entre sesiones
- ✅ **Acceso global** - Desde cualquier ubicación/dispositivo
- ✅ **Escalabilidad automática**
- ✅ **SSL incluido**
- ✅ **Deploy automático** al hacer push a GitHub

## Costo

- **Plan gratuito**: 500 horas/mes (suficiente para uso personal)
- **Plan Pro**: $5/mes (uso comercial)

## Resultado Final

Con Railway tendrás:
- 🌐 **URL pública** accesible desde cualquier lugar
- 💾 **Persistencia real** de usuarios y datos
- 🔒 **Autenticación JWT** funcionando
- 📱 **Acceso multi-dispositivo**
- ⚡ **Rendimiento optimizado**
