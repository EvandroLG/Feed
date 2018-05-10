.SILENT:

ESLINT=./node_modules/.bin/eslint
UGLIFY=./node_modules/uglify-js/bin/uglifyjs 

install:
	npm install

lint:
	$(ESLINT) feed.js

minify:
	$(UGLIFY) feed.js --mangle --output feed.min.js
