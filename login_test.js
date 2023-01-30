Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://www.automationpratice.com.br/');
    I.click('.right_list_fix a[href="/login"]');
    I.waitForText('Login', '10'); //esprar pelo texto "Login" por 10 segundos
    I.fillField('input#user','lucas_test@email.com');
    I.click('input#password');
    I.fillField('input#password', 'password123!');
    I.click('.login_submit button[type="submit"]');

    I.waitForElement('h2.swal2-title ');
    I.waitForText('Login realizado', '10');
    I.click('.swal2-actions button.swal2-confirm');
    I.waitForElement('section .dashboard_tab_button');
});

//Tentando logar apenas com email
//Tentando logar sem enviar email e senha
//Tentando logar apenas com senha;