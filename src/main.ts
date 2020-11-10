import * as express from "express";

const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
	response.render('index');
});

const port = process.env.PORT || 2412;
app.listen(port, () => {
	console.log("Now listening on %s", port);
});
