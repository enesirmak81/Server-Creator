@echo off
echo PC'de Node.js olup olmadigi kontrol ediliyor...
where node >nul 2>nul

if %errorlevel% neq 0 (
    echo Bilgisayarinizda Node.js yüklü olmadigi icin uygulama baslatilamadi.
    exit /b
)

cd /d "%~dp0"
npm start