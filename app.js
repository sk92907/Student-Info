const express	 =	 require('express'),
	  app        =	 express(),
	  mongoose	 = 	 require('mongoose'),
	  bodyParser =   require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// LOGIN ROUTE
app.get('/login', (req, res) => {
	res.render('login');
})

// INDEX ROUTE
app.get('/', (req, res) => {
	res.render('index');
})

// SHOW ROUTE
app.get('/show', (req, res) => {
	res.render('findStudent');
})

app.post('/show', (req, res) => {
	//Fetch the Student ID and show the coresponding details
	let id = req.body.id;
	// Search for this id in the DB and return the Student object
	res.render('show', {student: id});
})

// Add Student Route
app.get('/addStudent', (req, res) => {
	res.render('addStudent');
})
// Post route to add a new Student to our DB
app.post('/addStudent', (req, res) => {
	res.send("Student post route");
})

app.listen(3000, () => {	
	console.log('Server is running...');
})