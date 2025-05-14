const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
      tittle:{
        type:String,
        required:[true, 'Tittle can not be empty']
      },
      description:{
        type: String,
        required:[true, 'escription can not be empty']
      },
      difficulty: {
        type: String,
        enum: ['easy','medium','hard'],
        required:[true, 'difficulty can not be empty'],
        default: 'easy'
      },
      testCases:[
        {
            input: {
                type: String,
                required: true

            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial:{
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;