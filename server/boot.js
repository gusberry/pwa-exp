import spdy from 'spdy';
import app from './app';

const PORT = process.env.PORT || 9000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}!`);
});