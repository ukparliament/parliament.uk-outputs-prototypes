const
	express = require('express'),
	app     = express(),
	port    = process.env.PORT || 5000,
	path    = require('path');

app.use(express.static(path.join(__dirname, '/_public')));

// app root
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/_public/templates/index.html'));
});

// TODO: Sepearate routes into external files
// app.get('/research', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/index.html'));
// });
// app.get('/research/house-of-lord-largest-votes-ever-recorded', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/pdf.html'));
// });
// app.get('/research/moderning-uk-airspace', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/summary.html'));
// });
// app.get('/research/modernising-uk-airspace/an-introduction-to-airspace', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/brief-section.html'));
// });

// app.get('/research/modernising-uk-airspace/what-is-airspace', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/section.1.html'));
// });
// app.get('/research/modernising-uk-airspace/who-manages-airspace', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/section.2.html'));
// });
// app.get('/research/modernising-uk-airspace/airspace-standards-and-regulation', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/section.3.html'));
// });
// app.get('/research/modernising-uk-airspace/planning-airspace-change', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/section.4.html'));
// });
// app.get('/research/modernising-uk-airspace/airspace-modernisation', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/section.5.html'));
// });
// app.get('/research/modernising-uk-airspace/policy-progress-and-modernization', function (req, res) {
//   res.sendFile(path.join(__dirname, '/_public/templates/briefings-v5/section.6.html'));
// });

// requested views
// using regexp to match request to path
app.get(/([^\/]+)$/g, function(req, res) {
	res.sendFile(path.join(__dirname, req.path));
});

app.listen(port, function() {
	console.log('Server started on port: ' + port);
});
