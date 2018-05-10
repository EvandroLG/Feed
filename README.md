# Feed
A client-side library that makes easy to parse a XML feed to json

`Feed` calls [YQL](https://developer.yahoo.com/yql/) internally.

## Browser Compatibility
Feed is compatible with the following browsers/versions:
* Google Chrome
* Firefox
* Safari
* IOS Safari
* Opera
* IE 6+

## Instalation
To install Feed, execute:

```shell
  npm install feed-js
```

Or Bower too:
```shell
  bower install feed
```

Or simply pick up the file from src directory.

## Parameters
* **context** <code>Object</code> (<code>window</code> by default)
* **url** <code>String</code> (<code>undefined</code> by default)
* **number** <code>Number</code> (it's the total of posts <code>10</code> by default)
* **callback** <code>Function</code> (<code>Function</code> by default)

**Example**
```js
var render = function(posts) {
  posts.feed.entries.forEach(function (element, index) {
    console.log(element.title);
    console.log(element.content);
    console.log(element.link);
  });
};

window.Feed({
  url: 'http://rss1.smashingmagazine.com/feed/',
  number: 3,
  callback: render
});
```
