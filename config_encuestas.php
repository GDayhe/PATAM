<?php
/**
 * Configuración avanzada para el sistema de encuestas
 * PAT Alto Mijares
 */

// ===== CONFIGURACIÓN DE EMAIL =====
define('EMAIL_DESTINO', 'pataltomijares@gmail.com');
define('EMAIL_REMITENTE', 'noreply@pataltomijares.es');
define('ASUNTO_ADMIN', 'Nueva respuesta de encuesta - PAT Alto Mijares');
define('ASUNTO_PARTICIPANTE', 'Hemos recibido tu aportación - PAT Alto Mijares');

// ===== CONFIGURACIÓN DE SEGURIDAD =====
// Habilitar o deshabilitar registro de IPs
define('REGISTRAR_IP', true);

// Habilitar o deshabilitar logs
define('HABILITAR_LOGS', true);
define('RUTA_LOGS', __DIR__ . '/logs/encuestas.log');

// ===== CONFIGURACIÓN DE BASE DE DATOS (OPCIONAL) =====
// Descomenta estas líneas si deseas guardar en base de datos
/*
define('USAR_BASE_DATOS', true);
define('DB_HOST', 'localhost');
define('DB_USER', 'usuario');
define('DB_PASS', 'contraseña');
define('DB_NAME', 'pat_encuestas');
*/

// Si no estás usando base de datos, déjalo así:
define('USAR_BASE_DATOS', false);

// ===== LISTA DE MUNICIPIOS =====
$municipios = array(
    'Arañuel',
    'Argelita',
    'Ayódar',
    'Castillo de Villamalefa',
    'Cirat',
    'Cortes de Arenoso',
    'Espadilla',
    'Fanzara',
    'Fuentes de Ayódar',
    'Fuente La Reina',
    'Ludiente',
    'Montán',
    'Montanejos',
    'Puebla de Arenoso',
    'Toga',
    'Torralba del Pinar',
    'Torrechiva',
    'Vallat',
    'Villahermosa del Río',
    'Villamalur',
    'Villanueva de Viver',
    'Zucaina'
);

// ===== TIPOS DE APORTACIÓN =====
$tipos_aportacion = array(
    'Comentario',
    'Propuesta',
    'Observación',
    'Alegación'
);

// ===== FUNCIONES DE UTILIDAD =====

/**
 * Registra eventos en el archivo de log
 */
function registrar_log($mensaje) {
    if (HABILITAR_LOGS) {
        $directorio_logs = dirname(RUTA_LOGS);
        if (!is_dir($directorio_logs)) {
            mkdir($directorio_logs, 0755, true);
        }
        $timestamp = date('Y-m-d H:i:s');
        file_put_contents(RUTA_LOGS, "[$timestamp] $mensaje\n", FILE_APPEND);
    }
}

/**
 * Obtiene información del cliente
 */
function obtener_info_cliente() {
    $info = array(
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Desconocida',
        'navegador' => $_SERVER['HTTP_USER_AGENT'] ?? 'Desconocido',
        'fecha' => date('d/m/Y H:i:s'),
        'metodo' => $_SERVER['REQUEST_METHOD'] ?? 'POST'
    );
    return $info;
}

/**
 * Valida un municipio de la lista
 */
function validar_municipio($municipio) {
    global $municipios;
    return in_array($municipio, $municipios) || $municipio === 'Otro';
}

/**
 * Valida un tipo de aportación
 */
function validar_tipo_aportacion($tipo) {
    global $tipos_aportacion;
    return empty($tipo) || in_array($tipo, $tipos_aportacion);
}

/**
 * Guarda la respuesta en base de datos (si está configurada)
 */
function guardar_en_base_datos($datos) {
    if (!USAR_BASE_DATOS) {
        return true;
    }
    
    try {
        // Conexión a base de datos
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME,
            DB_USER,
            DB_PASS,
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        );
        
        $sql = "INSERT INTO encuestas (nombre, email, municipio, tipo_aportacion, comentarios, ip, fecha) 
                VALUES (?, ?, ?, ?, ?, ?, NOW())";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            $datos['nombre'],
            $datos['email'],
            $datos['municipio'],
            $datos['tipo_aportacion'],
            $datos['comentarios'],
            $datos['ip']
        ));
        
        registrar_log("Respuesta guardada en base de datos - Email: " . $datos['email']);
        return true;
    } catch (Exception $e) {
        registrar_log("Error al guardar en base de datos: " . $e->getMessage());
        return false;
    }
}

// ===== SCRIPT SQL PARA CREAR LA TABLA (ejecutar si usas base de datos) =====
/*
CREATE TABLE `encuestas` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `municipio` VARCHAR(255) NOT NULL,
  `tipo_aportacion` VARCHAR(100),
  `comentarios` LONGTEXT NOT NULL,
  `ip` VARCHAR(45),
  `fecha` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `leido` BOOLEAN DEFAULT FALSE,
  INDEX idx_fecha (fecha),
  INDEX idx_municipio (municipio),
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
*/

?>
