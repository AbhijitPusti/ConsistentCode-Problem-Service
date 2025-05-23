const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
      title:{
        type:String,
        required:[true, 'Title can not be empty']
      },
      description:{
        type: String,
        required:[true, 'description can not be empty']
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

const Problem = mongoose.model('Problem', problemSchema);  //1st parameter-collection name,2nd parameter-the schema object

module.exports = Problem;  //Problem->Mongoose model object