/*
  * Feed - A client-side library that work like a Feed Reader
  * http://github.com/evandrolg/Feed
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/

(function(root, doc) {

  'use strict';

  root.F = root.F || {};

  root.F.jsonp = function(context, url, callback) {
    var generatedfn = 'jsonp' + Math.round(Date.now() + Math.random() * 1000001);

    root[generatedfn] = function(data) {
      callback.call(context, data.query.results);
      delete root[generatedfn];
    };

    var script = doc.createElement('script');
    doc.getElementsByTagName('head')[0].appendChild(script);
    script.setAttribute('src', url + '&callback=' + generatedfn);
  };

  var Feed = function(params) {
    this.url = params.url;

    if (!this.url) {
      throw 'You need pass URL like parameter!';
    }

    this.context = params.context || root;
    this.limit = params.limit || 10;
    this.callback = params.callback || function() {};
  };

  Feed.prototype.request = function() {
    var query = 'select * from rss where url="{{ URL }}" limit {{ NUM }}'
      .replace('{{ URL }}', this.url)
      .replace('{{ NUM }}', this.limit);

    var url = 'https://query.yahooapis.com/v1/public/yql?q={{ QUERY }}&format=json'
      .replace('{{ QUERY }}', query);

    root.F.jsonp(this.context, url, this.callback);
  };

  root.Feed = function(params) {
    return new Feed(params).request();
  };

}(window, document));
