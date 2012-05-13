LESS_DIR = ./less
CSS_DIR = ./css

homepage:
	mkdir -p css
	lessc ${LESS_DIR}/default.less > ${CSS_DIR}/default.css
	lessc ${LESS_DIR}/default-ie8.less > ${CSS_DIR}/default-ie8.css
	lessc ${LESS_DIR}/mobile.less > ${CSS_DIR}/mobile.css

node:
	mkdir -p css
	node compile-css.js	

watch:
	echo "Watching less files..."
	watchr -e "watch('less/.*\.less') { system 'make' }"

.PHONY: homepage node watch