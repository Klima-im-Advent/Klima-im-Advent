import express from "express";

const app = express();
app.set("view engine", "ejs");

app.get("/", (request, response) => {
	response.render("index", { currentDay: 9 });
});
app.get("/tag/:number", (request, response) => {
	if (request.params.number === "6") {
		response.render(`tag_${request.params.number}`, {
			links: ["https://seashepherd.org/support-us/", "https://act.350.org/donate/build/", "https://www.climatecouncil.org.au/donate/", "https://www.greenpeace.de/spenden", "https://seebruecke.org/spenden/", "https://www.germanzero.de/spenden", ]
		});
	} else {
		response.render(`tag_${request.params.number}`);
	}
});
app.use(express.static("static"));

const port = process.env.PORT || 2412;
app.listen(port, () => {
	console.log("Now listening on %s", port);
});
