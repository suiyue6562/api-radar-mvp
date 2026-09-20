@echo off
cd /d "C:\Users\Administrator\Desktop\API-Radar-MVP"
echo [1/2] 添加并提交更改...
git add .
git diff --cached --quiet
if %errorlevel% neq 0 (
    git commit -m "auto-update %date% %time%"
)
echo [2/2] 推送到 GitHub...
git push origin main
echo.
echo ✅ 完成！
pause
