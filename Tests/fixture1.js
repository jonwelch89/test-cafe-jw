
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const elements = {
'shop_now':'.bw-nav__right.ml-1 .hidden-xs.hidden-sm > a',
'product_carousel': 'bw-product-list bw-product-carousel > div',

}

/* var success = function () {
    return $(console.log("This test has successfully passed"));
};

*/

fixture `Getting Started`
    .page `https://www.bloomandwild.com/`;

const getPageUrl = ClientFunction(() => window.location.href);   

test('My first test', async browser => {
    await browser
        .click(elements.shop_now)
        .wait(2000)
        .expect(Selector(elements.product_carousel).exists).ok()
        .expect(getPageUrl()).contains('https://www.bloomandwild.com/send-flower')
        
        console.log("This test has successfully passed")
;

        
     

});

//