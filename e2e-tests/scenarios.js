'use strict';

describe('my app', function() {


  it('should automatically redirect to /weather when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/weather");
  });

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/weather');
    });

  });
});
