class BaseError extends Error{                                 //JS has own error class
    constructor(name, statusCode, description, details){       //name-name for the type of error,description is mandatory
            super(description);
            this.name=name;
            this.statusCode=statusCode;
            this.details=details;                                                      
    }
    
}

module.exports = BaseError;


/* 
exception - runtime error(an unexpected event that occurs during program execution) and 
it is thrown(it means some exception occured) not return(because return triggers return from the function)
*/

// We later found this unnecessary
// Error.captureStackTrace(this);

// console.log("Printing stack trace");
// console.log(this.stack)
            
// //Every error has a stackTrace object which is a callstack which will throw a stack overflow error