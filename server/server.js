require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/user.route');
const guildRoutes = require('./routes/guild.route');
const path = require('path');

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/guilds", guildRoutes);

const imagePath = path.join(__dirname, 'public/images/profiles');
app.use('/images', express.static(imagePath));

app.listen(8080, () => console.log('API is running on port 8080'));
