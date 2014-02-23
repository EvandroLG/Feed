.SILENT:

install: install_node install_npm

install_node:
	brew install node

install_npm:
	curl https://npmjs.org/install.sh | sudo sh