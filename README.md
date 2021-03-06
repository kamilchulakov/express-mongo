# Name: undefined

## Краткое описание
REST веб-сервис, построенный на Express.js с использованием MongoDB.

## Технологии
Express.js, MongoDB, ESLint, Mongoose, Docker

## Запуск
```
Опционально: docker-compose up -d для развёртывывания MongoDB на нужном порту
npm run start или npm start
```

## Функционал
[x] Вывод существующего списка сотрудников с возможностью фильтрации

[x] Добавление/удаление/редактирование сотрудников

[x] Назначение сотрудников в отдел

[x] Удаление сотрудника из отдела

[x] Добавление/удаление/редактирование/получение отделов

## Данные в СУБД
<img src=".github/data_modelling.png" height="315" width="583" alt="data modelling">

Связь: One-To-Many

## Структура проекта
```
    .
    ├── index.js
    ├── src
        ├── db
        |   ├── connect.js
        ├── models
        |   ├── department.js
        |   └── employee.js
        ├── controllers
        |   ├── departments.controller.js
        |   └── employees.controller.js
        ├── routes
            ├── departments.routes.js
            └── employees.routes.js
```

## To-Do:
1) Nice PATCH
2) Nice naming (/users everywhere)
