describe('making a post', function () {
    it('logs in and creates a new post', function () {
        browser.get('http://localhost:3001')
        // click 'login'
        element(by.css('nav .login')).click()
        browser.pause()
        // fill out and submit login form
        element(by.model('username')).sendKeys('dickeyxxx')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()
        browser.pause()
        // submit a new post on the posts page
        var post = 'my new psot'
        element(by.model('postBody')).sendKeys(post)
        browser.pause()
        element(by.css('form .btn')).click()
        
        // the user should now see their post as the first post on the page
    })
})