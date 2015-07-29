import express from 'express';
import Badgs from './../lib/';
import badgesMiddleware from './../lib/middleware';

const app = express();

app.use('/badges', badgesMiddleware(new Badgs()));

app.listen(3000);
