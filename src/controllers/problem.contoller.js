const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

function pingProblemController(req,res){
    return res.json({message: 'Problem contoller is up'});
}

const problemService = new ProblemService(new ProblemRepository());
console.log("start")
async function addProblem(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch(error) {
        next(error);
    }
}


function getProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem')
       } catch (error) {
        next(error);
       }
}

function getProblems(req,res,next){
    try {
        throw new NotImplemented('addProblem')
       } catch (error) {
        next(error);
       }  
}

function deleteProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem')
       } catch (error) {
        next(error);
       }  
}

function updateProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem')
       } catch (error) {
        next(error);
       }  
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}