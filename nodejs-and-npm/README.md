# Название проекта

Реализация валидации банковских карт на основе библиотек

## Содержание

- [Технологии](#технологии)
- [Установка](#установка)
- [Использование](#использование)
- [Функции](#функции)
- [Контрибьюция](#контрибьюция)
- [Лицензия](#лицензия)

## Технологии

- JavaScript
- HTML/CSS
- Redom - для создания виртуальных DOM-элементов
- Inputmask - для маскирования ввода
- card-validator - для валидации номера карты
- email-validator - для валидации адресов электронной почты

## Установка

Укажите шаги для установки вашего проекта, например:
1. Склонируйте репозиторий на ваш локальный компьютер.
2. Перейдите в папку frontend и установите необходимые зависимости, запустив команду: `npm install`

## Использование

Эта форма позволяет пользователям вводить свои данные для завершения процесса оплаты. Вот основные компоненты формы:

- Поле для ввода номера карты с маской.
- Поля для ввода срока действия карты (месяц и год).
- Поле для ввода CVV-кода.
- Поле для ввода адреса электронной почты.
- Кнопка для оплаты, которая становится активной только когда все поля введены корректно.

### Пример использования:
`const formPay = el('form', { class: 'pay__form' }, divMain, emailInput, buttonPay);`<br>
`mount(document.body, formPay);`

## Функции

### Компоненты формы

- **Поле ввода номера карты**:
  - Использует маску формата '0000 0000 0000 0000'.
  - Проверяет, корректен ли ввод карты, и отображает соответствующую иконку банка.

- **Поле ввода срока действия карты**:
  - Месяц (MM) и год (YY).
  - Проверяет, корректен ли введенный месяц и год.

- **Поле ввода CVV-кода**:
  - Использует маску для ввода, проверяет корректность кода.

- **Поле ввода адреса электронной почты**:
  - Проверяет, корректен ли введенный адрес электронной почты.

- **Кнопка оплаты**:
  - Деактивируется, если не все введенные данные корректны.

## Примечания по использованию

Для запуска используйте комунду: `npm run dev`
