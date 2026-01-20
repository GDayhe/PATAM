<?php
/**
 * diagnostico.php
 * Script de diagnóstico para problemas con encuestas
 */

header('Content-Type: text/html; charset=UTF-8');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diagnóstico - Sistema de Encuestas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
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
            border-bottom: 2px solid #833f53;
            padding-bottom: 10px;
        }
        .test {
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #ddd;
            border-radius: 4px;
            background: #f9f9f9;
        }
        .test.success {
            border-left-color: #4caf50;
            background: #f1f8f6;
        }
        .test.error {
            border-left-color: #f44336;
            background: #fef5f5;
        }
        .test.warning {
            border-left-color: #ff9800;
            background: #fff8f3;
        }
        .icon {
            font-size: 1.2rem;
            margin-right: 10px;
        }
        code {
            background: #f0f0f0;
            padding: 3px 6px;
            border-radius: 3px;
            font-family: monospace;
        }
        .solution {
            background: #e3f2fd;
            border-left: 4px solid #2196F3;
            padding: 15px;
            margin-top: 10px;
            border-radius: 4px;
        }
        .solution h4 {
            margin-top: 0;
            color: #1976d2;
        }
        li {
            margin: 8px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔧 Diagnóstico del Sistema de Encuestas</h1>
        
        <?php
        $problemas = array();
        
        // Test 1: PHP version
        echo '<div class="test success">';
        echo '<span class="icon">✓</span>';
        echo '<strong>PHP Version:</strong> ' . phpversion();
        echo '</div>';
        
        // Test 2: mail() function
        if (function_exists('mail')) {
            echo '<div class="test success">';
            echo '<span class="icon">✓</span>';
            echo '<strong>Función mail() disponible:</strong> Sí';
            echo '</div>';
        } else {
            echo '<div class="test error">';
            echo '<span class="icon">✗</span>';
            echo '<strong>Función mail() disponible:</strong> No';
            $problemas[] = 'mail() no está disponible';
            echo '</div>';
        }
        
        // Test 3: Archivos PHP
        $archivos = array(
            'procesar_encuesta.php' => file_exists('procesar_encuesta.php'),
            'procesar_encuesta_simple.php' => file_exists('procesar_encuesta_simple.php'),
            'config_encuestas.php' => file_exists('config_encuestas.php'),
        );
        
        foreach ($archivos as $archivo => $existe) {
            if ($existe) {
                echo '<div class="test success">';
                echo '<span class="icon">✓</span>';
                echo '<strong>Archivo ' . $archivo . ':</strong> Encontrado';
                echo '</div>';
            } else {
                echo '<div class="test warning">';
                echo '<span class="icon">⚠</span>';
                echo '<strong>Archivo ' . $archivo . ':</strong> No encontrado';
                $problemas[] = $archivo . ' no está en el servidor';
                echo '</div>';
            }
        }
        
        // Test 4: Directorio logs
        if (is_writable('logs') || is_dir('logs')) {
            echo '<div class="test success">';
            echo '<span class="icon">✓</span>';
            echo '<strong>Directorio logs:</strong> Existe';
            echo '</div>';
        } else {
            echo '<div class="test warning">';
            echo '<span class="icon">⚠</span>';
            echo '<strong>Directorio logs:</strong> No existe o no tiene permisos';
            echo '<div class="solution"><strong>Solución:</strong> Crea la carpeta /logs/ manualmente</div>';
            echo '</div>';
        }
        
        // Resumen
        echo '<h2>📋 Resumen</h2>';
        
        if (empty($problemas)) {
            echo '<div class="test success">';
            echo '<span class="icon">✓</span>';
            echo '<strong>Estado:</strong> ¡Todo parece estar funcionando correctamente!';
            echo '</div>';
            echo '<div class="solution">';
            echo '<h4>Próximos pasos:</h4>';
            echo '<ol>';
            echo '<li>Abre <code>PATaltomijares.html</code></li>';
            echo '<li>Ve a la sección "Participación"</li>';
            echo '<li>Envía un formulario de prueba</li>';
            echo '<li>Verifica que recibes el email en pataltomijares@gmail.com</li>';
            echo '</ol>';
            echo '</div>';
        } else {
            echo '<div class="test error">';
            echo '<span class="icon">✗</span>';
            echo '<strong>Problemas detectados:</strong>';
            echo '<ul>';
            foreach ($problemas as $problema) {
                echo '<li>' . $problema . '</li>';
            }
            echo '</ul>';
            echo '</div>';
            
            echo '<div class="solution">';
            echo '<h4>🔍 Soluciones:</h4>';
            
            if (in_array('mail() no está disponible', $problemas)) {
                echo '<p><strong>• Función mail() no disponible:</strong></p>';
                echo '<ul>';
                echo '<li>Contacta al proveedor de hosting</li>';
                echo '<li>Solicita que habiliten la función <code>mail()</code></li>';
                echo '<li>O pide que configuren un servidor SMTP</li>';
                echo '<li>Algunos proveedores permiten enviar emails desde PHP sin mail()</li>';
                echo '</ul>';
            }
            
            if (in_array('procesar_encuesta.php no está en el servidor', $problemas)) {
                echo '<p><strong>• Archivo procesar_encuesta.php no encontrado:</strong></p>';
                echo '<ul>';
                echo '<li>Sube el archivo <code>procesar_encuesta.php</code> al servidor</li>';
                echo '<li>Debe estar en la misma carpeta que <code>PATaltomijares.html</code></li>';
                echo '<li>Usa FTP o el gestor de archivos del hosting</li>';
                echo '</ul>';
            }
            
            if (in_array('procesar_encuesta_simple.php no está en el servidor', $problemas)) {
                echo '<p><strong>• Alternativa disponible:</strong></p>';
                echo '<ul>';
                echo '<li>Intenta usar <code>procesar_encuesta_simple.php</code></li>';
                echo '<li>Es más simple y puede funcionar si procesar_encuesta.php falla</li>';
                echo '</ul>';
            }
            
            echo '</div>';
        }
        
        // Información adicional
        echo '<h2>ℹ️ Información del Servidor</h2>';
        echo '<div class="test">';
        echo '<strong>Sistema Operativo:</strong> ' . php_uname() . '<br>';
        echo '<strong>SAPI:</strong> ' . php_sapi_name() . '<br>';
        echo '<strong>Directorio actual:</strong> ' . getcwd() . '<br>';
        echo '</div>';
        ?>
    </div>
</body>
</html>
