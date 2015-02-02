var expect = require('chai').expect

describe('making a post', function () {
    it('creates an account and a new post', function () {
        browser.get('http://localhost:3001')
        // click 'login'
        element(by.css('nav .login')).click()
        
        // fill out and submit login form
        element(by.model('username')).sendKeys('dickeyxxx')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()

        // submit a new post on the posts page
        var post = 'my new post'
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()
        
        // the user should now see their post as the first post on the page
        element.all(by.css('ul.list-group li')).first().getText()
        .then(function (text) {
            expect(text).to.contain(post)
        })
    })
})