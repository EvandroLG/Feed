describe('feed', function() {

  describe('instance', function() {
    beforeEach(function() {
      this.verifyProperty = function(field, value) {
        var params = { url: 'http://www.mimi.com/feed' };
        params[field] = value;

        var feed =  Feed(params);

        expect(feed[field]).toEqual(value || 10);
      };
    });

    it('should exist Feed object', function() {
      expect(Feed).toBeDefined();
    });

    it('should accept url like parameter', function() {
      var instanceFunction = function() {
        Feed({ url: 'http://www.mimi.com/feed' });
      };

      expect(instanceFunction).not.toThrow();
    });

    it('if not receives url like parameter, should throw exception', function() {
      var instanceFunction = function() {
        Feed({});
      };

      expect(instanceFunction).toThrow();
    });

    it('should accept limit like parameter', function() {
      this.verifyProperty('limit', 3);
    });

    it('if is not passed limit parameter, should define number like 10', function() {
      this.verifyProperty('limit', undefined);
    });

    it('should accept callback like parameter', function() {});
  });

  describe('request', function() {
    it('should have request to googleapi', function() {
      Feed({ url: 'http://www.mimi.com/feed' });
      var src = document.head.lastChild.src
                .split('load?')[0];

      expect(src).toEqual('http://ajax.googleapis.com/ajax/services/feed/');
    });

    it('after request, should executes callback', function() {});
    it('should callback receive json like parameter', function() {});
  });

});