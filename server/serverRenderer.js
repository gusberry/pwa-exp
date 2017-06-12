import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/components';

export const getStaticHtmlBasedOnLocation = (location) => console.log(`${location} <---`) ||
  renderToString(<App currentLocation={location} />);

export const getIndexWithInjectStaticHtml = (staticHtml) => {
  const indexHtmlContent = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf8');

  const updatedIndexHtml = indexHtmlContent.replace('{{SERVER_RENDERER}}', staticHtml);

  return updatedIndexHtml;
}