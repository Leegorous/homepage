var fs = require('fs'),
	less = require('less');

fs.readFile('less/default.less', 'utf-8', function(err, data) {
	if (err) throw err;

	var parser = new(less.Parser)({
	    paths: ['.', 'less', './lib'], // Specify search paths for @import directives
	    filename: 'style.less' // Specify a filename, for better error messages
	});

	parser.parse(data, function (e, tree) {
	    var css = tree.toCSS({ compress: true }); // Minify CSS output

	    var p = 'css/default.css';
	    fs.writeFile(p, css, function(err) {
	    	if (err) throw err;
	    	console.log(css);
	    });
	});
});
