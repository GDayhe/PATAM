# 🚨 ERROR EN EL FORMULARIO - GUÍA DE SOLUCIÓN RÁPIDA

## ❌ El problema:
Cuando envías el formulario, sale: **"Error al enviar el formulario. Por favor intenta nuevamente"**

---

## ✅ SOLUCIÓN EN 3 PASOS

### PASO 1: Ejecutar diagnóstico (2 minutos)

1. Accede a tu servidor: `http://tudominio.com/diagnostico.php`
2. Lee lo que sale
3. Identifica qué NO tiene ✓ (la marca de verificación)

---

### PASO 2: Según el problema (5 minutos)

#### ❌ Si dice: "Archivo procesar_encuesta.php: No encontrado"

**SOLUCIÓN:**
1. Descarga estos archivos a tu computadora:
   - `procesar_encuesta.php`
   - `procesar_encuesta_simple.php`
   - `config_encuestas.php`

2. Sube vía FTP a tu servidor en: `/web/`

3. Importante: **Deben estar en la MISMA carpeta que `PATaltomijares.html`**

4. Comprueba accediendo a: `http://tudominio.com/procesar_encuesta.php`
   - Si ves texto JSON → ✓ Correcto
   - Si ves error → Carpeta incorrecta

---

#### ❌ Si dice: "Función mail() disponible: No"

**SOLUCIÓN A - Usar versión alternativa (RÁPIDA):**

1. En `PATaltomijares.html`, busca la línea que dice:
```javascript
fetch('procesar_encuesta.php', {
```

2. Cámbiala por:
```javascript
fetch('procesar_encuesta_simple.php', {
```

3. Sube el archivo actualizado

4. Prueba nuevamente

**SOLUCIÓN B - Contactar proveedor (MEJOR):**

1. Envía email a tu proveedor diciendo:
```
"Necesito enviar emails con PHP. 
Por favor, habilita la función mail() 
o configura SMTP para mi cuenta."
```

2. Espera confirmación
3. Prueba nuevamente

---

#### ❌ Si dice: "Archivo config_encuestas.php: No encontrado"

**SOLUCIÓN:**
1. Sube el archivo `config_encuestas.php` a `/web/`
2. Debe estar en la misma carpeta

---

### PASO 3: Verificar (2 minutos)

1. Abre: `http://tudominio.com/diagnostico.php`
2. Verifica que todo sale en VERDE ✓
3. Si hay algo rojo, repite el paso anterior

---

## 🧪 PRUEBA DEL FORMULARIO

Si todo está verde en diagnóstico.php:

1. Abre: `http://tudominio.com/PATaltomijares.html`
2. Ve a: "Participación"
3. Rellena:
   - Nombre: `Test`
   - Email: `tumail@gmail.com` (tu email real)
   - Municipio: `Arañuel`
   - Comentarios: `Test`
4. Haz clic: "Enviar Participación"

**Resultado esperado:**
- ✅ Mensaje verde: "Tu aportación ha sido enviada..."
- ✅ Email en pataltomijares@gmail.com
- ✅ Email en tu email de confirmación

---

## 📋 CHECKLIST FINAL

- [ ] Ejecuté diagnostico.php
- [ ] Subí todos los archivos PHP al servidor
- [ ] Los archivos están en `/web/`
- [ ] diagnostico.php muestra todo en verde ✓
- [ ] Probé el formulario
- [ ] Recibí email en pataltomijares@gmail.com

---

## 🆘 SI SIGUE SIN FUNCIONAR

**Recopila esta información y contacta al proveedor:**

1. Resultado completo de: `http://tudominio.com/diagnostico.php`
2. ¿Qué dice exactamente cuando envías el formulario?
3. ¿En qué proveedor está tu hosting?
4. ¿Cuál es el nombre de usuario de tu cuenta?

**Menciona:**
- Necesito que habiliten la función `mail()` de PHP
- O que configuren un servidor SMTP
- Para poder enviar emails desde formularios

---

## 📊 ARCHIVOS QUE DEBES TENER EN `/web/`

```
✓ PATaltomijares.html          (página principal)
✓ procesar_encuesta.php        (procesa formularios)
✓ procesar_encuesta_simple.php (alternativa)
✓ config_encuestas.php         (configuración)
✓ .htaccess                    (seguridad)
✓ diagnostico.php              (diagnóstico)
```

---

## 💡 CONSEJOS

- Verifica los nombres exactos (sin espacios)
- Sube en modo texto, no binario
- Espera 5 minutos después de cambios
- Limpia el caché del navegador (Ctrl+F5)
- Si aún hay problema, contacta al proveedor

---

**¡Debería funcionar ahora!** 🎉

Si tienes dudas, lee: `SOLUCION_ERROR.md`
