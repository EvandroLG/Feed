(function (root) {
  'use strict';

  var jsonp = function(url, callback) {
    root.F = {};
    root.F.callback = function(data) {
      callback(data.responseData);
    };

    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  var Feed = function(params) {
    this._cachedVariables(params);
    this._request();
  };

  Feed.prototype = {
    _cachedVariables: function(params) {
      var hasURL = this.url = params.url;

      if (!hasURL) {
        throw 'You need pass URL like parameter!';
      }

      this.limit = params.limit || 10;
      this.callback = params.callback || function() {};
    },

    _request: function() {
      var urlGoogle = 'http://ajax.googleapis.com/ajax/services/feed/' +
                      'load?v=1.0&num={{ NUM }}&callback=F.callback&q={{ URL }}&_=123';

      var url = urlGoogle.replace('{{ URL }}', encodeURIComponent(this.url))
                         .replace('{{ NUM }}', this.limit);

      jsonp(url, this.callback);
    }
  };

  root.Feed = function(params) {
    return new Feed(params);
  };

}(window));