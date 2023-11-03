import express from 'express';
import cors from 'cors';
import routePost from './routes/create.js';
import routeGet from './routes/read.js';
import routerDelete from './routes/delete.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(express.json());
app.use(cors());

app.use('/', routeGet);
app.use('/', routePost);
app.use('/', routerDelete);