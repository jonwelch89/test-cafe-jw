import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture `Getting Started`
    .page `http://enhanceddigital.co.uk/`;

const getPageUrl = ClientFunction(() => window.location.href);   

test('User can navigate to the contact us form', async browser => {
    await browser
        .click('#text-3 > div > a')
        .wait(2000)
        .expect(getPageUrl()).eql('http://enhanceddigital.co.uk/contact-us/')
        console.log("This test has successfully passed")
        console.log(getPageUrl())
});