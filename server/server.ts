import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { connectDb } from './models';

import { postMessages, putMessage } from './routes/messages';
import { getUser } from './routes/users';
import { authUser } from './routes/auth';

import { getTest , postTest } from './routes/tests';


const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build/')));


// test
app.get('/api/test/', getTest);
app.post('/api/test/', postTest);

// user
app.get('/api/users/', getUser);

// auth 
app.post('/api/auth/', authUser)

// messages

app.post('/api/messages', postMessages);
app.put('/api/messages/:id', putMessage);




/**
 * PROD: 
 * in production mode server and index are on the same folder ( In developer mode there is no index file)
 *   */
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + 'build/index.html'));
});

// tslint:disable-next-line:no-console
connectDb().then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error:', ${err}`);
  });


app.listen(port, () => console.log(`Listening on port ${port}
http://localhost:${port}`));