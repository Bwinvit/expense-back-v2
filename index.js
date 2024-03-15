import express from 'express';

import { CONFIG } from './src/configs/index.js';

const { PORT, POSTGRES_URL } = CONFIG;

const app = express();
const port = PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});