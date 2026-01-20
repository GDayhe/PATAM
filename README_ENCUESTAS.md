# Configuración de Encuestas de Participación - PAT Alto Mijares

## Descripción
Este sistema permite recopilar las respuestas de las encuestas de participación del Plan de Acción Territorial Alto Mijares y enviarlas automáticamente a **pataltomijares@gmail.com**.

## Componentes

### 1. Archivo HTML (`PATaltomijares.html`)
- Contiene un formulario integrado en la sección "Participación"
- Campos del formulario:
  - **Nombre Completo** (obligatorio)
  - **Email** (obligatorio)
  - **Municipio** (obligatorio) - lista de 23 municipios
  - **Tipo de Aportación** (opcional) - Comentario, Propuesta, Observación, Alegación
  - **Comentarios** (obligatorio)

### 2. Script PHP (`procesar_encuesta.php`)
Procesa las respuestas del formulario y envía dos emails:

#### Email 1: Al administrador (pataltomijares@gmail.com)
- Contiene todos los datos del formulario
- Información de fecha y IP del remitente
- Asunto: "Nueva respuesta de encuesta - PAT Alto Mijares"

#### Email 2: Al participante
- Confirmación de recepción
- Resumen de los datos enviados
- Asunto: "Hemos recibido tu aportación - PAT Alto Mijares"

## Instalación y Configuración

### Requisitos
- Servidor web con soporte PHP (versión 5.6 o superior)
- Configuración de correo electrónico en el servidor
- Los archivos deben estar en un hosting con capacidad de ejecutar PHP

### Pasos de Instalación

1. **Subir archivos al servidor:**
   - `PATaltomijares.html` - Página principal
   - `procesar_encuesta.php` - Script de procesamiento
   - `.htaccess` - Configuración de seguridad (opcional)

2. **Configuración del email:**
   
   El email destino está configurado como:
   ```
   $email_destino = "pataltomijares@gmail.com";
   ```
   
   Si necesitas cambiar la dirección de email, edita la línea anterior en `procesar_encuesta.php`.

3. **Verificar permisos:**
   - Asegúrate de que el servidor tiene permisos para ejecutar PHP
   - La función `mail()` de PHP debe estar habilitada en el servidor

### Seguridad

El script incluye las siguientes medidas de seguridad:

1. **Sanitización de entrada**: Todos los datos se limpian con `htmlspecialchars()` y `stripslashes()`
2. **Validación de email**: Se verifica que el email sea válido
3. **Validación de campos requeridos**: El formulario no envía datos incompletos
4. **Protección CSRF**: El formulario está protegido contra ataques de falsificación de solicitud entre sitios
5. **IP logging**: Se registra la dirección IP del remitente para auditoría

## Características

✅ Formulario integrado en el sitio web  
✅ Envío automático de emails  
✅ Confirmación al participante  
✅ Sanitización de datos  
✅ Validación de campos  
✅ Interfaz amigable con mensajes de error/éxito  
✅ Soporte para 23 municipios de la comarca  
✅ Categorización de aportaciones (Comentarios, Propuestas, Observaciones, Alegaciones)  

## Solución de Problemas

### Los emails no se envían
- Verifica que la función `mail()` está habilitada en PHP
- Contacta con tu proveedor de hosting para activar SMTP
- Revisa los logs del servidor

### El formulario no envía datos
- Asegúrate de que `procesar_encuesta.php` está en el mismo directorio que el HTML
- Verifica que la URL en el formulario es correcta: `fetch('procesar_encuesta.php', ...)`
- Abre la consola del navegador (F12) para ver errores

### Los datos no llegan correctamente
- Verifica la dirección de email destino en `procesar_encuesta.php`
- Comprueba que no hay filtros de spam bloqueando los emails
- Revisa los logs de error de PHP

## Mantenimiento

1. **Respaldos**: Considera mantener un registro de las respuestas (base de datos)
2. **Monitoreo**: Revisa los emails regularmente en pataltomijares@gmail.com
3. **Actualizaciones**: Mantén PHP actualizado en tu servidor

## Contacto

Para soporte técnico o cambios en la configuración de emails, contacta al administrador del sitio web.

---
*Última actualización: Enero 2026*
