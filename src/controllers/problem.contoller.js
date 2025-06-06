const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

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


async function getProblem(req,res,next){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully fetched a problem',
        error: {},
        data: problem
       })
       } catch (error) {
        next(error);
       }
}

async function getProblems(req,res,next){
    try {
       const response = await problemService.getAllProblems();
       return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully fetched all the problems',
        error: {},
        data: response
       })
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

function pingProblemController(req,res){
    return res.json({message: 'Problem contoller is up'});
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}