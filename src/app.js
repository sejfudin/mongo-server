import express from 'express';
import helmet from 'helmet';
import router from './router';

const app = express(); //app object initialization
app.use(express.json());
app.use(helmet());

router(app);

export default app;