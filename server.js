const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/tictactoe', router);

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:UMnXJQoABVJFYqG2@tictactoeapi.ajtqh.mongodb.net/game-data?retryWrites=true&w=majority&appName=TicTacToeAPI')
.then(() =>{
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Node API runs at ${PORT}`);
    });
}).catch((error) => {
    console.log(error)
});