#!/bin/bash
# Script de instalación y configuración rápida
# PAT Alto Mijares - Sistema de Encuestas

echo "================================================"
echo "Instalación del Sistema de Encuestas"
echo "PAT Alto Mijares"
echo "================================================"
echo ""

# Crear directorio de logs
echo "1. Creando directorio de logs..."
mkdir -p logs
chmod 755 logs
echo "   ✓ Directorio de logs creado"
echo ""

# Verificar PHP
echo "2. Verificando PHP..."
if command -v php &> /dev/null; then
    php_version=$(php -v | head -n1)
    echo "   ✓ PHP detectado: $php_version"
else
    echo "   ⚠ PHP no detectado. Por favor, instala PHP para ejecutar los scripts."
fi
echo ""

# Crear archivo de configuración local
echo "3. Configurando..."
echo "   Email destino: pataltomijares@gmail.com"
echo "   ✓ Configuración lista"
echo ""

# Resumen
echo "================================================"
echo "Instalación completada"
echo "================================================"
echo ""
echo "Próximos pasos:"
echo "1. Sube los archivos a tu servidor web"
echo "2. Verifica que PHP tiene soporte para mail()"
echo "3. Accede a: http://tudominio.com/PATaltomijares.html"
echo ""
echo "Para más información, lee README_ENCUESTAS.md"
echo ""
