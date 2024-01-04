class ExpressError extends Error {
    constructor(msg, status) {
      // need to call super to extend parent class of Error
      super();
      // adding a property to the ExpressError instance on its own; not actually sending a status code or msg
      // later will learn about how to access status and msg and respond with it
      // So far in express not all errors are printing error stack to console, so can also print the stack
      this.message = msg;
      this.status = status;
      console.error(this.stack)
    }
  }
  
  module.exports = ExpressError;