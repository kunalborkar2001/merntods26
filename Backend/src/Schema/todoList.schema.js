const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema  (
    {
        name: {
            type: String,
            required: true,

        },
        description : {
            type: String,
            required : false,
            default : "This Task is there..."
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date, 
            required: true,
        },
        completed: {
            type : Boolean,
            default : false
        }
    },
)

module.exports = mongoose.model("TodoList", todoListSchema)