# Feed
A client-side library that work like a Feed Reader, returning all datas of a post - title, text, link, etc

## Browser Compatibility
Feed is compatible with the following browsers/versions:
* Google Chrome
* Firefox
* Safari
* IOS Safari
* Opera
* IE 6+

## Parameters
* **context** <code>Object</code> (<code>window</code> by default)
* **url** <code>String</code> (<code>undefined</code> by default)
* **number** <code>Number</code> (it's the total of posts <code>10</code> by default)
* **callback** <code>Function</code> (<code>Function</code> by default)

**Example**
```js
var render = function(posts) {
  posts.feed.entries.forEach(element, index) {
    console.log(element.title);
    console.log(element.content);
    console.log(element.link);
  };
};

window.Feed({
  url: 'http://rss1.smashingmagazine.com/feed/',
  number: 3,
  callback: render
});
```