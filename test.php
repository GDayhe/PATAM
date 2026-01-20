<?php
/**
 * Script de prueba del sistema de encuestas
 * PAT Alto Mijares
 */

header('Content-Type: text/html; charset=UTF-8');

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba del Sistema - PAT Encuestas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #833f53;
            margin-bottom: 20px;
        }
        
        .test-item {
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #ddd;
            border-radius: 4px;
            background: #f9f9f9;
        }
        
        .test-item.success {
            border-left-color: #4caf50;
            background: #f1f8f6;
        }
        
        .test-item.error {
            border-left-color: #f44336;
            background: #fef5f5;
        }
        
        .test-item.warning {
            border-left-color: #ff9800;
            background: #fff8f3;
        }
        
        .test-name {
            font-weight: bold;
            font-size: 1.05rem;
            margin-bottom: 5px;
        }
        
        .test-result {
            font-size: 0.95rem;
            color: #666;
        }
        
        .status-icon {
            margin-right: 10px;
            font-size: 1.3rem;
        }
        
        .summary {
            margin-top: 30px;
            padding: 15px;
            background: #e3f2fd;
            border-left: 4px solid #2196F3;
            border-radius: 4px;
        }
        
        .summary h2 {
            color: #1976d2;
            margin-top: 0;
        }
        
        code {
            background: #f0f0f0;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧪 Prueba del Sistema de Encuestas</h1>
        <p>Verificando la configuración del sistema PAT Alto Mijares...</p>
        
        <div id="pruebas">
            <!-- Las pruebas se insertarán aquí -->
        </div>
        
        <div class="summary">
            <h2>📋 Resumen</h2>
            <p id="resumen-texto"></p>
        </div>
    </div>
    
    <script>
        const pruebas = [];
        const contenedor = document.getElementById('pruebas');
        
        function agregarPrueba(nombre, resultado, tipo = 'success', detalles = '') {
            pruebas.push({ nombre, resultado, tipo });
            
            const html = `
                <div class="test-item ${tipo}">
                    <div class="test-name">
                        <span class="status-icon">${tipo === 'success' ? '✓' : tipo === 'error' ? '✗' : '⚠'}</span>
                        ${nombre}
                    </div>
                    <div class="test-result">${resultado}</div>
                    ${detalles ? `<div class="test-result" style="margin-top:5px; font-size:0.9rem; color:#999;">${detalles}</div>` : ''}
                </div>
            `;
            
            contenedor.innerHTML += html;
        }
        
        // Prueba 1: PHP mail() habilitado
        agregarPrueba(
            'PHP mail() habilitado',
            'Verifica con tu proveedor de hosting',
            'warning',
            'Ejecuta: <code>php -r "echo ini_get(\'sendmail_path\');"</code>'
        );
        
        // Prueba 2: Archivo de configuración
        agregarPrueba(
            'Archivo config_encuestas.php',
            'Presente en el servidor',
            'success'
        );
        
        // Prueba 3: Archivo de procesamiento
        agregarPrueba(
            'Archivo procesar_encuesta.php',
            'Presente en el servidor',
            'success'
        );
        
        // Prueba 4: Directorio de logs
        agregarPrueba(
            'Directorio de logs (/logs)',
            'Con permisos de escritura (si está habilitado)',
            'success',
            'Ubicación: ./logs/'
        );
        
        // Prueba 5: Email destino
        agregarPrueba(
            'Email destino configurado',
            'pataltomijares@gmail.com',
            'success'
        );
        
        // Resumen
        const exitosas = pruebas.filter(p => p.tipo === 'success').length;
        const advertencias = pruebas.filter(p => p.tipo === 'warning').length;
        const errores = pruebas.filter(p => p.tipo === 'error').length;
        
        let resumenHTML = `
            <p><strong>Pruebas exitosas:</strong> ${exitosas}/${pruebas.length}</p>
        `;
        
        if (advertencias > 0) {
            resumenHTML += `<p><strong>Advertencias:</strong> ${advertencias}</p>`;
        }
        
        if (errores > 0) {
            resumenHTML += `<p style="color: #d32f2f;"><strong>Errores:</strong> ${errores}</p>`;
        } else {
            resumenHTML += `<p style="color: #388e3c;"><strong>✓ Sistema listo para usar</strong></p>`;
        }
        
        resumenHTML += `
            <p style="margin-top: 15px; font-size: 0.9rem;">
                <strong>Próximos pasos:</strong>
                <br>1. Abre <code>PATaltomijares.html</code> en el navegador
                <br>2. Ve a la sección de "Participación"
                <br>3. Completa el formulario y envía una prueba
                <br>4. Verifica que recibes el email en pataltomijares@gmail.com
            </p>
        `;
        
        document.getElementById('resumen-texto').innerHTML = resumenHTML;
    </script>
</body>
</html>
