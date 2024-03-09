import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
app.disable('x-powered-by');

app.use('/', cors(), routes);

app.listen(8082, () => console.log('server listening on port 8082'));


