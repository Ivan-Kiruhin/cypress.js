describe('Автотесты на форму логина', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут ввода имейла и ввожу логин
        cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу пароль
        cy.get('#loginButton').click(); // ищу кнопку авторизоваться
        cy.contains('Авторизация прошла успешно').should('be.visible'); // ищу текст об успешной авторизации
        cy.get('#exitMessageButton > .exitIcon'); // ищу крестик
     })
     it('Автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton').click(); // нажимаю кнопку восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // ищу инпут ввода имейла и ввожу логин
        cy.get('#restoreEmailButton').click(); // нажимаю кнопку отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon'); // ищу крестик
    })
    it('Автотест на проверку негативного кейса авторизации с неправильным паролем', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут ввода имейла и ввожу логин
        cy.get('#pass').type('111112asdasd'); // ищу инпут ввода пароля и ввожу НЕ ПРАВИЛЬНЫЙ пароль
        cy.get('#loginButton').click(); // ищу кнопку авторизоваться
        cy.contains('Такого логина или пароля нет').should('be.visible'); // ищу текст с ошибкой авторизации
        cy.get('#exitMessageButton > .exitIcon'); // ищу крестик
    })
    it('Автотест на проверку негативного кейса авторизации с неправильным логином', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('mail@dolnikov.ru'); // ищу инпут ввода имейла и ввожу НЕ ПРАВИЛЬНЫЙ логин
        cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу пароль
        cy.get('#loginButton').click(); // ищу кнопку авторизоваться
        cy.contains('Такого логина или пароля нет').should('be.visible'); // ищу текст с ошибкой авторизации
        cy.get('#exitMessageButton > .exitIcon'); // ищу крестик
    })
    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikov.ru'); // ищу инпут ввода имейла и ввожу логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу пароль
        cy.get('#loginButton').click(); // ищу кнопку авторизоваться
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); // ищу текст с ошибкой валидации
        cy.get('#exitMessageButton > .exitIcon'); // ищу крестик
    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru'); // ищу инпут ввода имейла и ввожу логин
       cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу пароль
       cy.get('#loginButton').click(); // ищу кнопку авторизоваться
       cy.contains('Авторизация прошла успешно').should('be.visible'); // ищу текст об успешной авторизации
       cy.get('#exitMessageButton > .exitIcon'); // ищу крестик
    })
 })
 