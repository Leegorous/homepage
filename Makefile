HOMEPAGE_LESS = ./less/default.less

homepage:
	mkdir -p css
	lessc ${HOMEPAGE_LESS} > css/default.css

node:
	mkdir -p css
	node compile-css.js	

.PHONY: homepage node