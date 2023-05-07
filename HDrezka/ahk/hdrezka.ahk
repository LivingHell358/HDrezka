#NoEnv
SendMode Input

SetTitleMatchMode, 2

; Проверяем, запущен ли браузер
IfWinExist, ahk_exe chrome.exe
{
    ; Если браузер уже запущен, активируем его окно
    WinActivate, ahk_exe chrome.exe
}
else
{
    ; Если браузер не запущен, запускаем его
    Run, chrome.exe
    WinWait, ahk_exe chrome.exe
}

; Создаем новую вкладку
Send, ^t
Sleep, 100

; Переходим на сайт
Send, https://www.rezka.ag{Enter}