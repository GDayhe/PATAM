<?php
/**
 * procesar_encuesta_simple.php
 * Versión simplificada sin dependencias de config_encuestas.php
 * Úsalo si procesar_encuesta.php no funciona
 */

header('Content-Type: application/json; charset=UTF-8');
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Configuración directa
$email_destino = "pataltomijares@gmail.com";
$asunto_admin = "Nueva respuesta de encuesta - PAT Alto Mijares";
$asunto_participante = "Hemos recibido tu aportación - PAT Alto Mijares";

// Municipios válidos
$municipios_validos = array(
    'Arañuel', 'Argelita', 'Ayódar', 'Castillo de Villamalefa', 'Cirat',
    'Cortes de Arenoso', 'Espadilla', 'Fanzara', 'Fuentes de Ayódar',
    'Fuente La Reina', 'Ludiente', 'Montán', 'Montanejos', 'Puebla de Arenoso',
    'Toga', 'Torralba del Pinar', 'Torrechiva', 'Vallat', 'Villahermosa del Río',
    'Villamalur', 'Villanueva de Viver', 'Zucaina', 'Otro'
);

// Validar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Función para sanitizar
function sanitizar($dato) {
    return htmlspecialchars(stripslashes(trim($dato)), ENT_QUOTES, 'UTF-8');
}

// Recopilar datos
$nombre = sanitizar($_POST['nombre'] ?? '');
$email = sanitizar($_POST['email'] ?? '');
$municipio = sanitizar($_POST['municipio'] ?? '');
$comentarios = sanitizar($_POST['comentarios'] ?? '');
$tipo_aportacion = sanitizar($_POST['tipo_aportacion'] ?? '');

// Validar campos requeridos
if (empty($nombre) || empty($email) || empty($municipio) || empty($comentarios)) {
    http_response_code(400);
    echo json_encode(['error' => 'Por favor completa todos los campos obligatorios']);
    exit;
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Por favor ingresa un email válido']);
    exit;
}

// Validar municipio
if (!in_array($municipio, $municipios_validos)) {
    http_response_code(400);
    echo json_encode(['error' => 'Municipio no válido']);
    exit;
}

// Preparar email para admin
$mensaje_admin = "Nueva respuesta de encuesta de participación\n";
$mensaje_admin .= "===========================================\n\n";
$mensaje_admin .= "Nombre: " . $nombre . "\n";
$mensaje_admin .= "Email: " . $email . "\n";
$mensaje_admin .= "Municipio: " . $municipio . "\n";
$mensaje_admin .= "Tipo de Aportación: " . ($tipo_aportacion ?: "No especificado") . "\n";
$mensaje_admin .= "\nComentarios:\n";
$mensaje_admin .= $comentarios . "\n";
$mensaje_admin .= "\n===========================================\n";
$mensaje_admin .= "Fecha: " . date('d/m/Y H:i:s') . "\n";
$mensaje_admin .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: noreply@pataltomijares.es\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Enviar email al admin
$email_admin_enviado = @mail($email_destino, $asunto_admin, $mensaje_admin, $headers);

if ($email_admin_enviado) {
    // Preparar email para participante
    $mensaje_participante = "Estimado/a " . $nombre . ",\n\n";
    $mensaje_participante .= "Gracias por tu participación en la encuesta del Plan de Acción Territorial Alto Mijares.\n";
    $mensaje_participante .= "Hemos recibido tu aportación y la analizaremos cuidadosamente.\n\n";
    $mensaje_participante .= "Datos de tu aportación:\n";
    $mensaje_participante .= "- Municipio: " . $municipio . "\n";
    if ($tipo_aportacion) {
        $mensaje_participante .= "- Tipo de Aportación: " . $tipo_aportacion . "\n";
    }
    $mensaje_participante .= "- Fecha: " . date('d/m/Y H:i:s') . "\n\n";
    $mensaje_participante .= "Gracias por tu tiempo y colaboración.\n\n";
    $mensaje_participante .= "Equipo del PAT Alto Mijares";
    
    @mail($email, $asunto_participante, $mensaje_participante, $headers);
    
    http_response_code(200);
    echo json_encode(['success' => 'Tu aportación ha sido enviada correctamente. Recibirás un correo de confirmación en breve.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar. La función mail() puede no estar habilitada en el servidor. Contacta al proveedor de hosting.']);
}
?>
