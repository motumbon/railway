# Aplicación de Seguimiento de Actividad# App Seguimiento

Aplicación web para el seguimiento de actividades en terreno con persistencia de datos en servidor.

## Características

- **Gestión de Usuarios**: Registro, login y perfiles de usuario
- **Notas Personales**: Crear, editar y eliminar notas privadas
- **Notas Compartidas**: Colaboración en tiempo real entre usuarios
- **Actividades**: Seguimiento de actividades en desarrollo y completadas
- **Tareas**: Gestión de tareas activas y completadas
- **Notificaciones**: Sistema de notificaciones para actividades compartidas
- **Persistencia**: Datos guardados permanentemente en servidor
- **Validación**: Verificación de datos y contraseñas seguras
- **Persistencia**: Los datos se guardan en localStorage del navegador

### 👥 Gestión de Nombres
- **Lista de Nombres**: Sidebar izquierdo con lista seleccionable
- **Agregar Nombres**: Campo de entrada para nuevos nombres
- **Eliminar Nombres**: Botón para borrar nombres seleccionados
- **Selección Visual**: Interfaz intuitiva con nombres destacados

### 🎨 Diseño Moderno
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Gradientes**: Diseño moderno con colores atractivos
- **Animaciones**: Transiciones suaves y efectos hover
- **UX Optimizada**: Interfaz fácil de usar

## Cómo Usar

### 1. Primer Uso
1. Abre `index.html` en tu navegador
2. Haz clic en "Crear cuenta"
3. Completa el formulario de registro
4. Inicia sesión con tus credenciales

### 2. Gestión de Nombres
1. Una vez dentro, usa el campo "Ingresar Nombre"
2. Haz clic en "Agregar" o presiona Enter
3. Selecciona nombres de la lista haciendo clic
4. Usa "Borrar Nombre" para eliminar el nombre seleccionado

### 3. Navegación
- **Cerrar Sesión**: Botón en la esquina superior derecha
- **Selección**: Haz clic en cualquier nombre de la lista
- **Eliminación**: Selecciona un nombre y usa el botón "Borrar Nombre"

## Estructura de Archivos

```
App Seguimiento/
├── index.html          # Estructura principal de la aplicación
├── styles.css          # Estilos y diseño responsive
├── script.js           # Lógica de la aplicación y funcionalidades
└── README.md           # Este archivo de documentación
```

## Funcionalidades Técnicas

### Almacenamiento Local
- Los usuarios se guardan en `localStorage` como JSON
- Los nombres se persisten entre sesiones
- No se requiere servidor backend

### Validaciones Implementadas
- **Registro**: Verificación de campos, contraseñas coincidentes, usuarios únicos
- **Login**: Validación de credenciales existentes
- **Nombres**: Prevención de duplicados, validación de entrada

### Seguridad Básica
- Validación de longitud de contraseña (mínimo 6 caracteres)
- Verificación de emails únicos
- Sanitización de entrada de datos

## Expansiones Futuras

Esta aplicación está preparada para expandirse con:
- **Seguimiento de Actividades**: Sistema completo de tareas por persona
- **Categorías**: Organización de actividades por tipo
- **Fechas y Recordatorios**: Sistema de calendario integrado
- **Reportes**: Análisis de productividad y estadísticas
- **Colaboración**: Compartir listas entre usuarios
- **Backend**: Integración con base de datos real

## Datos de Prueba

Para facilitar las pruebas, puedes descomentar la línea al final de `script.js` para crear un usuario de prueba:
- **Usuario**: admin
- **Contraseña**: 123456
- **Email**: admin@example.com

## Compatibilidad

- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móviles

## Instalación

1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador web
3. ¡Listo para usar!

No se requiere instalación de dependencias ni servidor web.
