@echo off
title Website Furniture - jangan tutup jendela ini
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js belum terpasang. Unduh dari https://nodejs.org lalu coba lagi.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Memasang dependency, tunggu sebentar...
  call npm.cmd install
)

echo.
echo Website akan terbuka di browser: http://localhost:5173
echo Biarkan jendela ini tetap terbuka selama melihat website.
echo Tekan Ctrl+C untuk berhenti.
echo.
call npm.cmd run dev -- --open
pause
