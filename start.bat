@echo off
echo Installing dependencies...
call npm install
cd client
call npm install
cd ..

echo Starting ScanMaster...
echo Backend will run on http://localhost:5000
echo Frontend will run on http://localhost:3000
echo.
call npm run dev
