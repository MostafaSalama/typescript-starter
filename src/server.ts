import * as express from 'express';
import * as path from 'path';
import router from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// static files
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/', router);

export default app;
