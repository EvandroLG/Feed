(function(root, doc, Q) {

  Q.test('should exist feed module in window', function(assert) {
    assert.equal(typeof(root.Feed), 'function');
  });

  var mockJsonp = function(component, asserts) {
    var jsonpCached = root.F.jsonp;

    var context = null;
    var url = null;
    var callback = null;

    root.F.jsonp = function(_context, _url, _callback) {
      context = _context;
      url = _url;
      callback = _callback;
    };

    component();
    root.F.jsonp = jsonpCached;
    asserts(context, url, callback);
  }

  Q.test('should call jsonp component passing correct parameters', function(assert) {
    var expectedUrl = 'https://news.ycombinator.com/rss';
    var expectedCallback = function() {};

    mockJsonp(function() {
      root.Feed({
        url: expectedUrl,
        limit: 3,
        callback: expectedCallback
      });
    }, function(context, url, callback) {
      assert.deepEqual(context, root);
      assert.deepEqual(callback, expectedCallback);

      assert.ok(url.indexOf('https://query.yahooapis.com/v1/public/yql?q=select') === 0);
      assert.ok(url.indexOf('limit 3') > 0);
      assert.ok(url.indexOf("url='" + expectedUrl + "'") > 0);
    });
  });

  Q.test('should create a script in the head with the expected url', function(assert) {
    var expectedUrl = 'http://localhost:3000';
    root.F.jsonp(root, expectedUrl, function() {});

    var script = doc.querySelector('head script');
    assert.ok(script);
    assert.ok(script.src.indexOf(expectedUrl + '&callback=jsonp') === 0);
  });

}(window, document, window.QUnit));
