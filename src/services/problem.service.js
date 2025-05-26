const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{
    constructor(problemRepository){                        //problemRepository is passed as property
        this.problemRepository= problemRepository;
    }

    async createProblem(problemData){
          try {
                // 1. Sanitize the markdown for description
                problemData.description = sanitizeMarkdownContent(problemData.description);
        
                const problem = await this.problemRepository.createProblem(problemData);
        
                return problem;
            
          } catch (error) {
            console.log(error);
            throw error;
          }
    }

    async getAllProblems() {
        
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        
    }
}

module.exports = ProblemService;