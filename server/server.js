// For local development
// ES6 imports do not work unless served over HTTP, so we cannot use file:// URLs locally when developing

const express = require('express');

const app = express();

app.use((req, res, next) => {
	res.header('Cross-Origin-Embedder-Policy', 'require-corp');
	res.header('Cross-Origin-Opener-Policy', 'same-origin');
	next();
});

app.use('/', express.static('../docs'));

app.listen(1234);

console.info('Host server started on http://localhost:1234/');
