var express = require("express");
const { middlewere } = require("./middlewere");
var app = express();

//////////////////// to  help express///regaarding identifying of data which type of data  i am sending
app.use(express.json());
/////////////////// it is important ehich help to pass data clint to server in j son

app.post("/students", middlewere, (req, res) => {
  let updated = req.body.name;
  let serupdated = req.body.surname;
  let add = req.body.address;

  res.json({ msg: ` ${updated} ${serupdated} from ${addgit}` });
});

PORT = 8000;
app.listen(8000, () => {
  console.log("server is running " + PORT);
});
