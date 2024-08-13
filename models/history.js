const mongoose = require('mongoose');

const historySchema = mongoose.Schema(
    {
        playerOne: {//always play as X
            type: String,
            require: true
        },
        playerTwo: {//always play as O
            type: String,
            require: true  
        },
        moves: {//max moves 9
            type: Number,
            require: true,
            default: 0,
        },
        isDraw: {
            type: Boolean,
            default: false
        },
        isOneWon: {//P1 won = x won vise versa
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const History = mongoose.model('History', historySchema);

module.exports = History;