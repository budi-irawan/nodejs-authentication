const express = require('express');
const logger = require('morgan');
const userRoute = require('./routers/userRoute');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/user', userRoute);

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});