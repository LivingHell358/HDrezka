#NoEnv
SendMode Input

SetTitleMatchMode, 2

; Нажимаем сочетание клавиш Ctrl+Shift+Alt+A
Send, {Ctrl Down}{Shift Down}{Alt Down}a{Ctrl Up}{Shift Up}{Alt Up}

Sleep, 1000

Loop, 100
{
	Send, {Backspace}
}

; Нажимаем сочетание клавиш Ctrl+Shift+L
Send, {Ctrl Down}{Shift Down}l{Ctrl Up}{Shift Up}

Sleep, 5000 ; Ждем 5 секунд

; Нажимаем сочетание клавиш Ctrl+Shift+L
Send, {Ctrl Down}{Shift Down}l{Ctrl Up}{Shift Up}

; Нажимаем клавишу Enter
Send, {Enter}
