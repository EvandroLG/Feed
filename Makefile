.SILENT:

JSHINT=./node_modules/jshint/bin/jshint
UGLIFY=./node_modules/uglify-js/bin/uglifyjs 

install:
	npm install

lint:
	$(JSHINT) feed.js

minify:
	$(UGLIFY) feed.js --mangle --output feed.min.js
