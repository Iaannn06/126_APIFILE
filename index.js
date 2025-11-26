const express = require('express');
const connectDatabase = require('./config/db');
//const apiRoutes = require('./routes/api');
const apiRoutes = require('./routes/api');

connectDatabase
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/api/v1', apiRoutes);
app.use('/api/v1', apiRoute);

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();