<?php
// procesar_encuesta.php
// Establecer headers correctos
header('Content-Type: application/json; charset=UTF-8');

// Manejo de errores
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Verificar archivo de configuración
if (!file_exists(__DIR__ . '/config_encuestas.php')) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de configuración. Contacta al administrador.']);
    exit;
}

require_once __DIR__ . '/config_encuestas.php';

// Validar que es una petición POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recopilar datos del formulario
    $nombre = isset($_POST['nombre']) ? sanitizar($_POST['nombre']) : '';
    $email = isset($_POST['email']) ? sanitizar($_POST['email']) : '';
    $municipio = isset($_POST['municipio']) ? sanitizar($_POST['municipio']) : '';
    $comentarios = isset($_POST['comentarios']) ? sanitizar($_POST['comentarios']) : '';
    $tipo_aportacion = isset($_POST['tipo_aportacion']) ? sanitizar($_POST['tipo_aportacion']) : '';
    $info_cliente = obtener_info_cliente();
    
    // Validar campos requeridos
    if (empty($nombre) || empty($email) || empty($municipio) || empty($comentarios)) {
        echo json_encode(['error' => 'Por favor completa todos los campos obligatorios']);
        registrar_log("Intento de envío con campos incompletos - Email: $email");
        http_response_code(400);
        exit;
    }
    
    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['error' => 'Por favor ingresa un email válido']);
        registrar_log("Email inválido proporcionado: $email");
        http_response_code(400);
        exit;
    }
    
    // Validar municipio
    if (!validar_municipio($municipio)) {
        echo json_encode(['error' => 'Municipio no válido']);
        registrar_log("Municipio no válido: $municipio");
        http_response_code(400);
        exit;
    }
    
    // Validar tipo de aportación
    if (!validar_tipo_aportacion($tipo_aportacion)) {
        echo json_encode(['error' => 'Tipo de aportación no válido']);
        registrar_log("Tipo de aportación no válido: $tipo_aportacion");
        http_response_code(400);
        exit;
    }
    
    // Preparar contenido del email para el administrador
    $mensaje_admin = "Nueva respuesta de encuesta de participación\n";
    $mensaje_admin .= "===========================================\n\n";
    $mensaje_admin .= "Nombre: " . $nombre . "\n";
    $mensaje_admin .= "Email: " . $email . "\n";
    $mensaje_admin .= "Municipio: " . $municipio . "\n";
    $mensaje_admin .= "Tipo de Aportación: " . ($tipo_aportacion ?: "No especificado") . "\n";
    $mensaje_admin .= "\nComentarios:\n";
    $mensaje_admin .= $comentarios . "\n";
    $mensaje_admin .= "\n===========================================\n";
    $mensaje_admin .= "Fecha: " . $info_cliente['fecha'] . "\n";
    if (REGISTRAR_IP) {
        $mensaje_admin .= "IP: " . $info_cliente['ip'] . "\n";
    }
    $mensaje_admin .= "Navegador: " . substr($info_cliente['navegador'], 0, 100) . "\n";
    
    // Headers del email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: " . EMAIL_REMITENTE . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Enviar email al administrador
    $email_enviado_admin = mail(EMAIL_DESTINO, ASUNTO_ADMIN, $mensaje_admin, $headers);
    
    if ($email_enviado_admin) {
        // También enviar confirmación al usuario
        $mensaje_participante = "Estimado/a " . $nombre . ",\n\n";
        $mensaje_participante .= "Gracias por tu participación en la encuesta del Plan de Acción Territorial Alto Mijares.\n";
        $mensaje_participante .= "Hemos recibido tu aportación y la analizaremos cuidadosamente.\n\n";
        $mensaje_participante .= "Datos de tu aportación:\n";
        $mensaje_participante .= "- Municipio: " . $municipio . "\n";
        if ($tipo_aportacion) {
            $mensaje_participante .= "- Tipo de Aportación: " . $tipo_aportacion . "\n";
        }
        $mensaje_participante .= "- Fecha: " . $info_cliente['fecha'] . "\n\n";
        $mensaje_participante .= "Gracias por tu tiempo y colaboración.\n\n";
        $mensaje_participante .= "Equipo del PAT Alto Mijares";
        
        mail($email, ASUNTO_PARTICIPANTE, $mensaje_participante, $headers);
        
        // Guardar en base de datos si está configurado
        $datos_guardar = array(
            'nombre' => $nombre,
            'email' => $email,
            'municipio' => $municipio,
            'tipo_aportacion' => $tipo_aportacion,
            'comentarios' => $comentarios,
            'ip' => $info_cliente['ip']
        );
        guardar_en_base_datos($datos_guardar);
        
        registrar_log("Respuesta enviada exitosamente - Email: $email - Municipio: $municipio");
        
        echo json_encode(['success' => 'Tu aportación ha sido enviada correctamente. Recibirás un correo de confirmación en breve.']);
        http_response_code(200);
    } else {
        registrar_log("Error al enviar email - Email: $email");
        echo json_encode(['error' => 'Error al enviar la aportación. Por favor intenta nuevamente o contacta al administrador.']);
        http_response_code(500);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
}

// Función para sanitizar entrada
function sanitizar($dato) {
    return htmlspecialchars(stripslashes(trim($dato)), ENT_QUOTES, 'UTF-8');
}
?>
