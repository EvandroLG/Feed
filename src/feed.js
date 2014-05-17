/*
  * Feed - A client-side library that work like a Feed Reader
  * http://github.com/evandrolg/Feed
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/

(function() {

  'use strict';

  var root = this;

  var jsonp = function(context, url, callback) {
    root.F = {};

    root.F.callback = function(data) {
      callback.call(context, data.responseData);
    };

    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  var Feed = function(params) {
    var that = this;

    var cachedVariables = function(params) {
      var hasURL = this.url = params.url;

      if (!hasURL) {
        throw 'You need pass URL like parameter!';
      }
 
      this.context = params.context || root;
      this.limit = params.limit || 10;
      this.callback = params.callback || function() {};
    }.call(that, params);

    var request = function() {
      var urlGoogle = 'http://ajax.googleapis.com/ajax/services/feed/' +
                      'load?v=1.0&num={{ NUM }}&callback=F.callback&q={{ URL }}&_=123';

      var url = urlGoogle.replace('{{ URL }}', encodeURIComponent(this.url))
                         .replace('{{ NUM }}', this.limit);

      jsonp(this.context, url, this.callback);
    }.call(that);
  };

  root.Feed = function(params) {
    return new Feed(params);
  };

}).call(this);
