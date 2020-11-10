import * as express from 'express'; 

let app = express();

app.get('/', (request, response) => {
  response.send("Es scheint zu funktionieren");
});

const port = process.env.PORT || 2412;
app.listen(port, () => {
  console.log("Now listening on %s", port);
})
