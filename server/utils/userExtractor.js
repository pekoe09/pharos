const jwt = require('jsonwebtoken')
const { getOneById } = require('./dataUtils')

const userExtractor = async (req, res, next) => {
  if (!req.token) {
    req.user = null
  } else {
    let userId
    await jwt.verify(req.token, process.env.SECRET, (err, decoded) => {
      if(err) {
        let errWrap = new Error('Username is already in use')
        errWrap.isUnauthorizedAttempt = true
        next(errWrap)
      } else {
        userId = decoded.userId
      }
    })

    if (!userId) {
      let err = new Error('Token is invalid')
      err.isUnauthorizedAttempt = true
      next(err)
    }
    const user = await getOneById('users', userId)
    if(!user) {
      let err = new Error(`User ${userId} cannot be found`)
      err.isUnauthorizedAttempt = true
      next(err)
    }
    req.user = user
  }
  next()
}

module.exports = { userExtractor }