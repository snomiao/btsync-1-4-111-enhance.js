@echo off

chcp 65001

copy "%~dp0%\patch\btsync-enhance.js" ^
    "%USERPROFILE%\\AppData\\Roaming\\BitTorrent Sync\\ui\\btsync-enhance.js"
copy "%~dp0%\patch\index.html" ^
    "%USERPROFILE%\\AppData\\Roaming\\BitTorrent Sync\\ui\\index.html"
    
echo patch done
pause