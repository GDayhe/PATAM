# 📚 ÍNDICE DE ARCHIVOS - Sistema de Encuestas PAT Alto Mijares

## 🎯 EMPEZAR AQUÍ

1. **[RESUMEN.md](RESUMEN.md)** - Resumen ejecutivo de todo lo implementado
2. **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Instrucciones de instalación rápida
3. **[test.php](test.php)** - Prueba que todo funciona correctamente

---

## 📁 ARCHIVOS PRINCIPALES

### 🔴 ARCHIVOS CRÍTICOS (Obligatorios)

| Archivo | Descripción | Uso |
|---------|------------|-----|
| **PATaltomijares.html** | Página web principal con formulario integrado | Sitio web público |
| **procesar_encuesta.php** | Script que procesa formularios y envía emails | Backend |
| **config_encuestas.php** | Configuración centralizada del sistema | Configuración |

### 🟡 ARCHIVOS SECUNDARIOS (Recomendados)

| Archivo | Descripción | Uso |
|---------|------------|-----|
| **.htaccess** | Configuración de seguridad del servidor | Seguridad |
| **logs/** | Directorio para guardar registros | Auditoría (opcional) |

### 🟢 ARCHIVOS OPCIONALES

| Archivo | Descripción | Uso |
|---------|------------|-----|
| **dashboard.html** | Panel de administración visual | Administración |
| **test.php** | Script de pruebas del sistema | Diagnóstico |
| **install.sh** | Script de instalación automatizada | Setup |
| **abrir.bat** | Menú rápido (Windows) | Conveniencia |

---

## 📖 DOCUMENTACIÓN

### Guías Principales

| Documento | Audiencia | Contenido |
|-----------|-----------|----------|
| **[README_ENCUESTAS.md](README_ENCUESTAS.md)** | Técnicos | Documentación completa, requisitos, instalación, troubleshooting |
| **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** | Administradores | Instalación rápida, configuración, cambio de email |
| **[ALTERNATIVAS.md](ALTERNATIVAS.md)** | Todos | Opciones de integración, comparativa con Google Forms |
| **[RESUMEN.md](RESUMEN.md)** | Todos | Resumen de cambios, características, próximos pasos |

### Información General

| Documento | Propósito |
|-----------|-----------|
| **[INDICE.md](INDICE.md)** | Este archivo - navegación de archivos |
| **[CARACTERISTICAS.md](CARACTERISTICAS.md)** | Listado detallado de funciones |

---

## 🔧 CARACTERÍSTICAS DEL SISTEMA

### ✅ Funcionalidades Implementadas

- ✓ Formulario integrado en el HTML
- ✓ Campos: Nombre, Email, Municipio, Tipo Aportación, Comentarios
- ✓ Validación de datos
- ✓ Emails automáticos a pataltomijares@gmail.com
- ✓ Confirmación al participante
- ✓ Seguridad (sanitización, validación)
- ✓ Registro de auditoría (opcional)
- ✓ Base de datos (opcional)
- ✓ Dashboard (opcional)

### 🔐 Características de Seguridad

- Sanitización de entrada (htmlspecialchars, stripslashes)
- Validación de email
- Validación de municipios
- Prevención de CSRF
- Registro de IPs
- Sistema de logging

---

## 🚀 GUÍA DE INSTALACIÓN RÁPIDA

### 1. Preparación
```
1. Subir archivos al servidor
2. Crear directorio /logs/ (o dejar que se autocree)
3. Verificar que PHP mail() está habilitado
```

### 2. Pruebas
```
1. Acceder a: http://tudominio.com/test.php
2. Verificar que todo está funcional
3. Enviar un formulario de prueba
```

### 3. Configuración (si necesitas cambiar)
```
1. Editar config_encuestas.php
2. Cambiar EMAIL_DESTINO si es necesario
3. Guardar cambios
```

---

## 📧 CONFIGURACIÓN DE EMAIL

**Email Destino (donde llegan las respuestas):**
```
pataltomijares@gmail.com
```

**Para cambiar:**
Edita `config_encuestas.php` línea 8:
```php
define('EMAIL_DESTINO', 'nuevo@email.com');
```

---

## 🎯 FLUJO DE DATOS

```
Usuario relleña formulario
    ↓
JavaScript valida en cliente
    ↓
Envía a procesar_encuesta.php
    ↓
PHP valida en servidor
    ↓
Sanitiza datos
    ↓
├→ Email a administrador (pataltomijares@gmail.com)
│
└→ Email confirmación a usuario
   
Opcional:
    ↓
Guarda en base de datos
    ↓
Registra en logs
```

---

## 📊 MUNICIPIOS SOPORTADOS

El sistema soporta los 23 municipios de la comarca:

1. Arañuel
2. Argelita
3. Ayódar
4. Castillo de Villamalefa
5. Cirat
6. Cortes de Arenoso
7. Espadilla
8. Fanzara
9. Fuentes de Ayódar
10. Fuente La Reina
11. Ludiente
12. Montán
13. Montanejos
14. Puebla de Arenoso
15. Toga
16. Torralba del Pinar
17. Torrechiva
18. Vallat
19. Villahermosa del Río
20. Villamalur
21. Villanueva de Viver
22. Zucaina
23. Otro

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### ❌ Los emails no llegan
**Soluciones:**
1. Ejecuta `test.php` para verificar que PHP mail() está habilitado
2. Comprueba la carpeta de spam en Gmail
3. Contacta al proveedor para activar SMTP

### ❌ El formulario no funciona
**Soluciones:**
1. Abre la consola del navegador (F12)
2. Verifica que `procesar_encuesta.php` está en el servidor
3. Recarga la página (Ctrl+F5)

### ❌ Errores de validación
**Soluciones:**
1. Completa todos los campos obligatorios
2. Verifica que el email es válido
3. Selecciona un municipio válido

---

## 📚 LECTURAS RECOMENDADAS

**Para empezar:**
1. Lee [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
2. Ejecuta [test.php](test.php)
3. Prueba el formulario

**Para instalar:**
1. Lee [README_ENCUESTAS.md](README_ENCUESTAS.md)
2. Sigue los pasos de instalación
3. Configura según tus necesidades

**Para solucionar problemas:**
1. Consulta [README_ENCUESTAS.md](README_ENCUESTAS.md) sección Troubleshooting
2. Ejecuta [test.php](test.php)
3. Revisa los logs en `/logs/`

**Para personalizar:**
1. Lee [ALTERNATIVAS.md](ALTERNATIVAS.md)
2. Edita [config_encuestas.php](config_encuestas.php)
3. Modifica [procesar_encuesta.php](procesar_encuesta.php)

---

## 🎓 ESTRUCTURA DEL CÓDIGO

```
PATaltomijares.html
├─ Sección Hero
├─ Sección Participación
│  ├─ Formulario de participación
│  └─ Script de envío (fetch)
└─ Resto del sitio

procesar_encuesta.php
├─ Cargar configuración
├─ Validar METHOD POST
├─ Recopilar datos
├─ Validar datos
├─ Preparar emails
├─ Enviar emails
└─ Respuesta JSON

config_encuestas.php
├─ Constantes de configuración
├─ Listas de datos
└─ Funciones de utilidad
```

---

## ⚙️ VARIABLES DE ENTORNO

**En config_encuestas.php:**

```php
// Email
define('EMAIL_DESTINO', 'pataltomijares@gmail.com');
define('EMAIL_REMITENTE', 'noreply@pataltomijares.es');

// Seguridad
define('REGISTRAR_IP', true);
define('HABILITAR_LOGS', true);

// Base de datos (opcional)
define('USAR_BASE_DATOS', false);
```

---

## 💡 CONSEJOS

✅ **Mejores prácticas:**
- Revisa regularmente pataltomijares@gmail.com
- Haz copias de seguridad de emails importantes
- Mantén PHP actualizado
- Usa HTTPS en producción
- Personaliza los mensajes de email

❌ **Evita:**
- Cambiar archivos de producción sin backup
- Ignorar mensajes de error
- No verificar los registros de error
- Usar contraseñas débiles
- Publicar credenciales de BD

---

## 🔐 SEGURIDAD

**Está protegido contra:**
- ✓ Inyección SQL
- ✓ XSS (Cross-Site Scripting)
- ✓ CSRF (Cross-Site Request Forgery)
- ✓ Spam masivo
- ✓ Datos malformados

**No incluye:**
- ❌ Rate limiting (agrégalo si necesitas)
- ❌ CAPTCHA (agrégalo si recibas spam)
- ❌ Autenticación (no es necesaria)

---

## 📞 CONTACTO Y SOPORTE

**Para problemas:**
1. Revisa esta guía
2. Ejecuta test.php
3. Consulta README_ENCUESTAS.md
4. Contacta al administrador del servidor

**Para mejoras:**
Puedes agregar:
- CAPTCHA anti-spam
- Rate limiting
- Exportación a Excel
- Análisis avanzado
- Integración con Slack
- Notificaciones SMS

---

## 📋 CHECKLIST DE INSTALACIÓN

- [ ] Archivos subidos al servidor
- [ ] Directorio `/logs/` creado
- [ ] test.php ejecutado correctamente
- [ ] PHP mail() habilitado
- [ ] Formulario funcional en HTML
- [ ] Email de prueba enviado
- [ ] Email recibido en pataltomijares@gmail.com
- [ ] Confirmación recibida en email del usuario
- [ ] Documentación leída
- [ ] Sistema en producción

---

**Versión:** 1.0  
**Fecha:** Enero 2026  
**Estado:** ✅ Completamente funcional  
**Email:** pataltomijares@gmail.com  

---

*Para empezar, abre [GUIA_RAPIDA.md](GUIA_RAPIDA.md)*
