require('dotenv').config();
const express = require('express');
const expressWs = require('express-ws');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./router/auth-router');
const dialogRouter = require('./router/dialog-router');
const messageRouter = require('./router/message-router');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;

const app = express();
const wsInstance = expressWs(app);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use('/authorization', authRouter);
app.use('/dialog', dialogRouter);
app.use('/message', messageRouter(wsInstance));
app.use(errorMiddleware);

// app.ws('/', function (ws, req) {
//   console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО');
//   ws.on('connection', function () {});
//   console.log('socket', req.testing);
// });

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Serve port ${PORT}`));
      }
    );
  } catch (e) {
    console.log(e);
  }
};

start();
