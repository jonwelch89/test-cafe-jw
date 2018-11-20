import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture `Getting Started`
    .page `https://www.google.com/`;

const getPageUrl = ClientFunction(() => window.location.href);   

test('A google search', async browser => {
    await browser
        .typeText('input[title=Search]' , "Arsenal")
        .wait(2000)
        .click(".aajZCb input[type=submit]:nth-child(1)")
        .wait(1000)
        .expect(Selector('#resultStats').exists).ok()
        console.log("This test has successfully passed")
;

        
     
});