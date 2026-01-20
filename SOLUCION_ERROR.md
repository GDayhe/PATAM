# ❌ SOLUCIÓN: Error al Enviar Formulario

Si ves el mensaje: **"Error al enviar el formulario. Por favor intenta nuevamente"**

Sigue estos pasos para diagnosticar y resolver el problema.

---

## 🔍 PASO 1: Diagnosticar el Problema

### Ejecuta el diagnóstico:
1. Accede a: `http://tudominio.com/diagnostico.php`
2. Lee todos los resultados
3. Toma nota de los problemas encontrados

---

## 🛠️ PASO 2: Soluciones Según el Problema

### Problema 1: "procesar_encuesta.php no encontrado"

**Causa:** El archivo no está en el servidor.

**Solución:**
1. Descarga `procesar_encuesta.php` a tu computadora
2. Sube usando FTP a: `/web/procesar_encuesta.php`
3. **IMPORTANTE:** Debe estar en la MISMA carpeta que `PATaltomijares.html`
4. Verifica el diagnóstico nuevamente

---

### Problema 2: "Función mail() no disponible"

**Causa:** El servidor no tiene habilitada la función `mail()`.

**Solución A (Solución rápida):**
1. Usa el archivo alternativo: `procesar_encuesta_simple.php`
2. Cambia en HTML: reemplaza `procesar_encuesta.php` por `procesar_encuesta_simple.php`
3. En PATaltomijares.html, línea ~689, cambia:
```javascript
fetch('procesar_encuesta.php', {
```
a:
```javascript
fetch('procesar_encuesta_simple.php', {
```

**Solución B (Contactar proveedor):**
1. Contacta al proveedor de hosting
2. Solicita que habilite la función `mail()` de PHP
3. O pide que configuren un servidor SMTP externo
4. Ejemplo de proveedores que envían emails por SMTP:
   - SendGrid
   - Mailgun
   - Gmail SMTP

---

### Problema 3: "config_encuestas.php no encontrado"

**Causa:** El archivo de configuración no está en el servidor.

**Solución:**
1. Sube `config_encuestas.php` al servidor
2. Debe estar en la misma carpeta que los otros archivos PHP
3. Este archivo define el email destino y otras opciones

---

## 📝 VERIFICACIÓN PASO A PASO

### Checklist:

- [ ] ¿Todos los archivos están en el servidor?
  ```
  /web/
  ├── PATaltomijares.html
  ├── procesar_encuesta.php (o procesar_encuesta_simple.php)
  ├── config_encuestas.php
  └── .htaccess
  ```

- [ ] ¿Ejecutaste diagnostico.php?
  ```
  http://tudominio.com/diagnostico.php
  ```

- [ ] ¿Todos los tests salieron en verde?

- [ ] ¿La función mail() está disponible?

- [ ] ¿Los nombres de archivos son exactos (sin espacios)?

---

## 🧪 PRUEBA SIMPLE

### Para verificar que funciona:

1. Abre `PATaltomijares.html`
2. Ve a "Participación"
3. Rellena:
   - **Nombre:** Test User
   - **Email:** tumail@example.com (TU EMAIL real)
   - **Municipio:** Arañuel
   - **Comentarios:** Esto es una prueba
4. Haz clic en "Enviar Participación"
5. Espera la respuesta

**Si funciona:**
- Verás mensaje verde: "Tu aportación ha sido enviada..."
- Recibirás un email en pataltomijares@gmail.com
- Recibirás otro email en tumail@example.com

**Si NO funciona:**
- Verás mensaje rojo con detalles del error
- Abre la consola (F12) para ver más información
- Ejecuta diagnostico.php nuevamente

---

## 🐛 INFORMACIÓN PARA DIAGNOSTICAR

Si aún hay problemas, recopila esta información:

1. **Resultado de diagnostico.php** (cópia y pega)
2. **Consola del navegador** (F12 → Console)
3. **¿Qué error exacto sale?**
4. **¿En qué proveedor de hosting estás?**
5. **¿Qué sistema operativo del servidor?**

---

## 💬 MENSAJES DE ERROR Y SOLUCIONES

### "Error: procesar_encuesta.php no responde correctamente"
```
→ El archivo no está en el servidor
→ Sube procesar_encuesta.php vía FTP
```

### "Error de conexión. ¿Está procesar_encuesta.php en la misma carpeta?"
```
→ Archivo en carpeta incorrecta
→ Debe estar junto a PATaltomijares.html
```

### "Error de configuración. Contacta al administrador"
```
→ config_encuestas.php no encontrado
→ Sube el archivo al servidor
```

### "La función mail() puede no estar habilitada"
```
→ PHP mail() no disponible
→ Usa procesar_encuesta_simple.php
→ O contacta al proveedor
```

---

## 📞 CONTACTO CON PROVEEDOR

**Si necesitas que habiliten mail():**

Ejemplo de email para tu proveedor:
```
Asunto: Habilitar función mail() de PHP

Hola,

Necesito enviar emails desde mi aplicación PHP.
Por favor, habilita la función mail() o configura 
un servidor SMTP para la cuenta [tuusuario]@[tudominio.com]

Gracias,
[Tu nombre]
```

---

## ✅ RESULTADO ESPERADO

Cuando funcione correctamente:

1. **Usuario rellena formulario** → Sin errores
2. **Usuario ve mensaje verde** → "Tu aportación ha sido enviada..."
3. **Admin recibe email** → En pataltomijares@gmail.com con todos los datos
4. **Usuario recibe confirmación** → Email de confirmación personalizado

---

## 📊 ALTERNATIVAS SI MAIL() NO FUNCIONA

### Opción 1: Usar servicio externo (Recomendado)
- SendGrid
- Mailgun
- Amazon SES
- Gmail SMTP

### Opción 2: Usar Google Forms nuevamente
- Los datos se envían automáticamente
- Pero menos personalización

### Opción 3: Guardar en base de datos
- Los datos se guardan en MySQL
- Un administrador los revisa después
- Sin envío de emails automático

---

## 🎯 RESUMEN RÁPIDO

**Si el formulario no funciona:**

1. Ejecuta → `diagnostico.php`
2. Lee los errores → Identifica el problema
3. Sigue la solución → Aplica el fix
4. Prueba nuevamente → Verifica que funciona

**Archivos necesarios en el servidor:**
```
✓ PATaltomijares.html
✓ procesar_encuesta.php (O procesar_encuesta_simple.php)
✓ config_encuestas.php
✓ .htaccess
```

**Email destino:**
```
pataltomijares@gmail.com
```

---

¡Si después de esto sigue sin funcionar, contacta al proveedor de hosting!

**Versión:** Enero 2026  
**Última actualización:** Hoy
