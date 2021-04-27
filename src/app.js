import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import router from './router';

const app = express(); //app object initialization
app.use(express.json());
app.use(helmet());
app.use(cors());

router(app);

export default app;