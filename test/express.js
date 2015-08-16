import express from 'express';
import Badgs from './../src/lib';
import badgesMiddleware from './../src/lib/middleware';

const app = express();

app.use('/badges', badgesMiddleware(new Badgs()));

app.listen(3000);
