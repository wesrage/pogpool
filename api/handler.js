import PrettyError from 'pretty-error'

const pretty = new PrettyError()

export default function handler(routeHandler) {
   return function handlerMiddleware(req, res) {
      function createError(error) {
         if (error && error.redirect) {
            res.redirect(error.redirect)
         } else {
            let userException = error
            const status = userException.status || 500
            delete userException.status
            console.error(pretty.render(error))
            res.status(status).json(userException)
         }
      }

      try {
         routeHandler(req, res, err => {
            if (err) {
               createError(err)
            }
         }).then(result => {
            if (result instanceof Function) {
               result(res)
            } else {
               res.json(result)
            }
         }).catch(error => {
            createError(error)
         })
      } catch (error) {
         createError(error)
      }
   }
}
