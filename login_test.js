Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://www.automationpratice.com.br/');
    I.click('.right_list_fix a[href="/login"]');
});
