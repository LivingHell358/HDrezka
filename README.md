Сайт HDrezka (голосовой поиск фильма):
Для работы скриптов нужно установить два расширения:

Custom JavaScript for Websites 2 (для скриптинга сочетаний клавиш): https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk
Speechnotes Speech to Text (для голосового ввода): https://chrome.google.com/webstore/detail/speechnotes-speech-to-tex/nncconplehmbkbhkgkodmnkfaflopkji

Далее необходимо зайти на сайт https://rezka.ag и открыть первое расширение. В появившееся окно необходимо вставить скрипт, написанный на JS (находится в папке HDrezka,файл с именем app.js, открыть можно в блокноте) и нажать кнопку Save (сохранить). Проверить, что все правильно, можно сочетаниями клавиш на сайте того же HDrezke: Ctrl + Alt + Shift + Q - воспроизведение (на странице фильма/сериала). Ctrl + Alt + Shift + A - открыть строку поиска. Ctrl + Alt + (S,D,F,G,H,J,K,L,Z,X) - выбирает номер фильма из списка от 1-10. После того, как убедились, что все работает, необходимо зайти в дополнения браузера и изменить сочетание клавиш для активации Speechnotes. В AHK скрипте это Ctrl + Shift + L. После того, как все настроили - можно приступать к использованию.

Команда на открытие сайта (Давай посмотрим фильм) , загружается сайт и можно приступать к другим командам.
Далее будет открыто поле ввода и можно будет приступать говорить.
На запрос отводится 5 секунд.
После запроса скрипт будет ждать 2 секунды, пока прогрузится список фильмов. Затем необходимо будет выбрать номер фильма в списке, после чего откроется его страница.
Для того, чтобы запустить фильм, можно использовать команды:
-Включи фильм
Для отсановки
-Останови фильм
Что бы развернуть фильм на весь экран команда:
-Фильм на весь экран
Для того что бьы свернуть:
-сверни фильм
Для нового запроса - произнесите "поиск фильма"
Для выбора фильма из списка - произнесите "номер" + [номер фильма 1-10]
После этого, все управление будет производиться стандартными скриптами из папки multimedia.
Приятного пользования!
