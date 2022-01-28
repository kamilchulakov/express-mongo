# Name: undefined

## Краткое описание
REST веб-сервис, построенный на Express.js с использованием MongoDB.

## Технологии
Express.js, MongoDB

## Запуск
```
npm run start
```

## Функционал
[?] Вывод существующего списка сотрудников с возможностью фильтрации

[?] Добавление/удаление/редактирование сотрудников

[?] Назначение сотрудников в отдел

[?] Удаление сотрудника из отдела

## Данные в СУБД
<img src=".github/data_modelling.png" height="315" width="583" alt="data modelling">

Связь: One-To-Many

## Структура проекта
```
    .
    ├── src
        ├── routes
            ├── departments.routes.js
            └── employers.routes.js
```
