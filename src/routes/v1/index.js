const express = require('express');

const  ProblemRouter = require('./problems.route')

const v1Router = express.Router();

//if any request comes and route continues with /problems, we map it to problemRouter
v1Router.use('/problems', ProblemRouter);

module.exports = v1Router;
