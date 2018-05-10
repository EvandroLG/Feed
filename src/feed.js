/*
  * Feed - A client-side library that work like a Feed Reader
  * http://github.com/evandrolg/Feed
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/

(function(root, doc) {

  'use strict';

  var script = null;
  var jsonp = function(context, url, callback) {
    var generatedfn = 'jsonp' + Math.round(Date.now() + Math.random() * 1000001);

    root[generatedfn] = function(data) {
      callback.call(context, data.query.results);
      delete root[generatedfn];
    };

    script = doc.createElement('script');
    doc.getElementsByTagName('head')[0].appendChild(script);
    script.setAttribute('src', url + '&callback=' + generatedfn);
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
      var query = "select * from rss where url='{{ URL }}' LIMIT {{ NUM }}"
                  .replace('{{ URL }}', this.url)
                  .replace('{{ NUM }}', this.limit);

      var url = 'https://query.yahooapis.com/v1/public/yql?q={{ QUERY }}&format=json'
                .replace('{{ QUERY }}', query);

      jsonp(this.context, url, this.callback);
    }.call(that);
  };

  root.Feed = function(params) {
    return new Feed(params);
  };

}(window, document));
