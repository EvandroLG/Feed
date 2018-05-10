# Feed
Library that makes easy to parse an RSS feed in your client-side.

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

Or yarn:
```shell
  yarn add feed-js
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
  posts.item.forEach(function (element) {
    console.log(element.title);
    console.log(element.link);
  });
};

window.Feed({
  url: 'https://news.ycombinator.com/rss',
  number: 3,
  callback: render
});
```
