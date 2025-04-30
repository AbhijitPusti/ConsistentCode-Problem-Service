const { StatusCodes } = require('http-status-codes');

function pingProblemController(req,res){
    return res.json({message: 'Problem contoller is up'});
}

function addProblem(req,res){
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({
            message:'Not implemented'
        });
}

function getProblem(req,res){

}

function getProblems(req,res){
    
}

function deleteProblem(req,res){
    
}

function updateProblem(req,res){
    
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}