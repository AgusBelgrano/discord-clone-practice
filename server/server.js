const express = require('express');
const cors = require('cors')
const app = express();
const routes = require('./routes/user.route');

app.use(cors());
app.use(express.json());

app.use("/users", routes);

app.listen(8080, () => console.log('API is running on port 8080'));
