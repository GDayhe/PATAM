@echo off
REM Script de ayuda para el sistema de encuestas
REM PAT Alto Mijares - Windows

title PAT Encuestas - Herramientas

cls
echo.
echo ===============================================
echo   PAT ALTO MIJARES - SISTEMA DE ENCUESTAS
echo ===============================================
echo.
echo Archivos del sistema:
echo.
echo [1] PATaltomijares.html          - Pagina principal (Abrir)
echo [2] procesar_encuesta.php        - Procesador (Abrir)
echo [3] config_encuestas.php         - Configuracion (Editar)
echo [4] test.php                     - Pruebas (Abrir)
echo [5] dashboard.html               - Panel admin (Abrir)
echo.
echo Documentacion:
echo.
echo [6] README_ENCUESTAS.md          - Documentacion completa
echo [7] GUIA_RAPIDA.md              - Guia rapida
echo [8] ALTERNATIVAS.md              - Opciones alternativas
echo [9] RESUMEN.md                   - Resumen del sistema
echo.
echo Configuracion:
echo.
echo [0] Abrir esta carpeta en Explorador
echo [Q] Salir
echo.
set /p opcion="Elige una opcion: "

if "%opcion%"=="1" start PATaltomijares.html
if "%opcion%"=="2" start notepad procesar_encuesta.php
if "%opcion%"=="3" start notepad config_encuestas.php
if "%opcion%"=="4" start test.php
if "%opcion%"=="5" start dashboard.html
if "%opcion%"=="6" start notepad README_ENCUESTAS.md
if "%opcion%"=="7" start notepad GUIA_RAPIDA.md
if "%opcion%"=="8" start notepad ALTERNATIVAS.md
if "%opcion%"=="9" start notepad RESUMEN.md
if "%opcion%"=="0" start explorer .
if "%opcion%"=="Q" exit
if "%opcion%"=="q" exit

cls
echo.
echo ERROR: Opcion no valida. Intenta de nuevo.
echo.
pause
goto menu

:menu
call %0
