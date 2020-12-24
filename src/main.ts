import express from "express";
import { spawn } from 'child_process';

const app = express();
app.set("view engine", "ejs");

app.get("/", (_request, response) => {
	response.render("index", { currentDay: 24 });
});
app.get("/tag/:number", (request, response) => {
	if (request.params.number === "6") {
		response.render(`tag_${request.params.number}`, {
			links: ["https://seashepherd.org/support-us/", "https://act.350.org/donate/build/", "https://www.climatecouncil.org.au/donate/", "https://www.greenpeace.de/spenden", "https://seebruecke.org/spenden/", "https://www.germanzero.de/spenden", ]
		});
	} else {
		response.render(
			`tag_${request.params.number}`,
			{
				"preview": request.query.preview
			});
	}
});
app.get("/pdf", (request, response) => {
  console.log(request.query);
  if (typeof request.query.name !== 'string' ||
      !request.query.name.match(/^[a-z ]*$/i)) {
    response.sendStatus(400);
    return;
  }
  if (typeof request.query.a_name !== 'string' ||
      !request.query.a_name.match(/^[a-z ]*$/i)) {
    response.sendStatus(400);
    return;
  }
  const process = spawn('sh', ['run.sh', request.query.name, request.query.a_name]);
  response.write('');
  process.stdout.on('data', (data) => {
    response.write(data);
  });
  process.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
    response.end();
  });
});
app.use(express.static("static"));

const port = process.env.PORT || 2412;
const server = app.listen(port, () => {
	console.log("Now listening on %s", port);
});

server.keepAliveTimeout = 50 * 1000;
