
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const plantRouter = require('./routes/plant.router');
const roomRouter = require('./routes/room.router');
const favoriteRouter = require('./routes/favorite.router');
const roomPlantRouter =  require('./routes/roomplant.router');
const editRoomRouter = require('./routes/editRoom.router');
const searchRouter = require('./routes/search.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/plant', plantRouter);
app.use('/api/room', roomRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/roomplant', roomPlantRouter);
app.use('/api/editroom', editRoomRouter);
app.use('/api/search', searchRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
