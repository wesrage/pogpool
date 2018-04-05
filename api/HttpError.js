function HttpError(status, message) {
   this.status = status
   this.message = message
}

HttpError.prototype = Object.create(Error.prototype)
HttpError.prototype.constructor = HttpError

export default HttpError
