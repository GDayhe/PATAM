# GUÍA RÁPIDA: Sistema de Encuestas PAT Alto Mijares

## 🚀 Inicio Rápido

### Email Destino
✉️ **pataltomijares@gmail.com**

Todos los resultados de las encuestas de participación se enviarán a esta dirección.

---

## 📁 Archivos Creados/Modificados

| Archivo | Descripción |
|---------|------------|
| `PATaltomijares.html` | ✏️ Modificado - Agregué formulario de participación integrado |
| `procesar_encuesta.php` | 🆕 Script que procesa y envía emails |
| `config_encuestas.php` | 🆕 Configuración centralizada |
| `dashboard.html` | 🆕 Panel de administración (opcional) |
| `test.php` | 🆕 Prueba del sistema |
| `.htaccess` | 🆕 Configuración de seguridad |
| `README_ENCUESTAS.md` | 🆕 Documentación completa |
| `install.sh` | 🆕 Script de instalación |

---

## ✅ Características Implementadas

### Formulario de Participación
- ✓ Campo: Nombre Completo (obligatorio)
- ✓ Campo: Email (obligatorio)
- ✓ Campo: Municipio (obligatorio - 23 opciones)
- ✓ Campo: Tipo de Aportación (Comentario, Propuesta, Observación, Alegación)
- ✓ Campo: Comentarios (obligatorio)

### Procesamiento
- ✓ Validación de datos en cliente (JavaScript)
- ✓ Validación de datos en servidor (PHP)
- ✓ Sanitización de entrada
- ✓ Prevención de inyección SQL
- ✓ Verificación de email válido

### Emails
- ✓ Email al administrador (pataltomijares@gmail.com)
- ✓ Email de confirmación al participante
- ✓ Incluye fecha, hora e IP del remitente
- ✓ Resumen de la aportación

### Seguridad
- ✓ Sanitización de entrada (htmlspecialchars, stripslashes)
- ✓ Validación de campos requeridos
- ✓ Validación de email (filter_var)
- ✓ Validación de municipios
- ✓ Validación de tipo de aportación
- ✓ Registro de IPs y eventos (logging)

### Opcionales (Configurables)
- ✓ Almacenamiento en base de datos MySQL
- ✓ Dashboard de administración
- ✓ Sistema de logging

---

## 🔧 Instalación

### Paso 1: Subir archivos al servidor
```
/web/
├── PATaltomijares.html        ← Página principal
├── procesar_encuesta.php      ← Procesar formularios
├── config_encuestas.php       ← Configuración
├── dashboard.html             ← Panel admin (opcional)
├── test.php                   ← Pruebas (opcional)
├── .htaccess                  ← Seguridad
└── logs/                       ← Directorio (se crea automáticamente)
```

### Paso 2: Verificar configuración
1. Accede a `test.php` en tu navegador: `http://tudominio.com/test.php`
2. Verifica que PHP mail() está habilitado
3. Contacta con tu proveedor si hay problemas

### Paso 3: Probar el sistema
1. Abre `PATaltomijares.html`
2. Ve a la sección "Participación"
3. Completa el formulario
4. Haz clic en "Enviar Participación"
5. Verifica que recibes el email

---

## 📧 Cambiar Email Destino

Si necesitas cambiar a otro email, edita `config_encuestas.php`:

```php
// Línea 8
define('EMAIL_DESTINO', 'tunuevoemail@ejemplo.com');
```

O edita directamente en `procesar_encuesta.php` (primera línea del código).

---

## 📊 Base de Datos (Opcional)

Si quieres almacenar respuestas en base de datos:

1. En `config_encuestas.php`, descomenta:
```php
define('USAR_BASE_DATOS', true);
define('DB_HOST', 'localhost');
define('DB_USER', 'usuario');
define('DB_PASS', 'contraseña');
define('DB_NAME', 'pat_encuestas');
```

2. Ejecuta el SQL proporcionado en `config_encuestas.php`

3. El dashboard en `dashboard.html` mostrará los datos

---

## 🐛 Solución de Problemas

### Los emails no se envían
- **Solución**: Verifica en `test.php` que PHP mail() está habilitado
- **Contacta**: Tu proveedor de hosting (solicitando activar SMTP o mail())

### El formulario no responde
- **Solución**: Abre la consola del navegador (F12)
- **Verifica**: Que `procesar_encuesta.php` está en el mismo directorio

### Errores de validación
- **Solución**: Completa todos los campos obligatorios
- **Verifica**: Que el email es válido (ej: usuario@dominio.com)

### No aparece el formulario en el HTML
- **Solución**: Recarga la página (Ctrl+F5)
- **Verifica**: Que usas la versión actualizada de PATaltomijares.html

---

## 📈 Monitoreo

### Ver emails recibidos
1. Accede a: pataltomijares@gmail.com
2. Cada respuesta llegará como un email individual
3. Puedes crear filtros en Gmail para organizarlos

### Ver logs (si está habilitado)
- Ubicación: `/web/logs/encuestas.log`
- Contiene: Todas las acciones del sistema (envíos, errores, etc.)

### Ver respuestas en dashboard (con BD)
- Accede a: `http://tudominio.com/dashboard.html`
- Requiere: Base de datos MySQL configurada

---

## 📞 Contacto y Soporte

Para problemas técnicos o cambios:
1. Revisa el archivo `README_ENCUESTAS.md` (documentación completa)
2. Contacta al administrador del sitio web
3. Consulta los logs en `/logs/`

---

## 📝 Notas Importantes

- ⚠️ El email debe estar configurado en tu servidor
- ⚠️ Comprueba regularmente pataltomijares@gmail.com
- ⚠️ Haz copias de seguridad de los datos
- ⚠️ Mantén PHP y el servidor actualizados
- ✓ El sistema es completamente funcional tal como está

---

## ✨ Personalizaciones Futuras

Puedes agregar:
- [ ] Exportar datos a CSV/Excel
- [ ] Análisis de tendencias
- [ ] Mapas de participación por municipio
- [ ] Notificaciones en tiempo real
- [ ] Integración con Google Sheets
- [ ] Generación de reportes automáticos

---

**Sistema implementado: Enero 2026**
**Email de contacto: pataltomijares@gmail.com**
**Estado: Listo para producción ✓**
