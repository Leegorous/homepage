HOMEPAGE_LESS = ./less/default.less

homepage:
	mkdir -p css
	lessc ${HOMEPAGE_LESS} > css/default.css

node:
	mkdir -p css
	node compile-css.js	

watch:
	echo "Watching less files..."
	watchr -e "watch('less/.*\.less') { system 'make' }"

.PHONY: homepage node watch