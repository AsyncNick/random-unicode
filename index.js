// index.js

var u = "\\u";
var chars = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m','n',
'o','p','q','r','s','t','u',
'v','w','x','y','z']
var numbs = [0,1,2,3,4,5,6,7,8,9]

for (var x in chars) {
	for (var j in numbs) {
		var mix = u + chars[x] + numbs[j] + chars[x] + numbs[j] + chars[x] + numbs[j];
		for (var i = 0; i < 6, i >= 0; i++) {
			var unicode = mix;
				if (unicode !== 0) {
					var randomUnicode = unicode.split('\n').join('');
					break;
				}
		}
	}
}

module.exports = randomUnicode;