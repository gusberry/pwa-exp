import express from 'express';
import path from 'path';
import morgan from 'morgan';

import { getStaticHtmlBasedOnLocation, getIndexWithInjectStaticHtml } from './serverRenderer';

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: 10 * 1000 }));
// logger
app.use(morgan('combined'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  const staticHtml = getStaticHtmlBasedOnLocation(req.url);
  console.log(staticHtml)
  const updatedHtml = getIndexWithInjectStaticHtml(staticHtml);
  res.send(updatedHtml);
});

module.exports = app;