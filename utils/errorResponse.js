class ErrorResponse extends Error {
  constructor(message, statusCode) {
    // calling super to call Error class constructor and message
    // because error class has own msg property
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
