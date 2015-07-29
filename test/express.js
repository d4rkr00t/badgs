import express from 'express';
import Badgs from './../src';
import badgesMiddleware from './../src/middleware';

const app = express();

app.use('/badges', badgesMiddleware(new Badgs()));

app.listen(3000);
