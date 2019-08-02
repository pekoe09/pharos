const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { 
  wrapAsync,
  checkUser,
  validateMandatoryFields
} = require('./controllerHelpers')
const userRouter = require('express').Router()

userRouter.get('/', wrapAsync(async (req, res, next) => {
  checkAuthorization(req, 'admin')

}))

userRouter.get('/:id', wrapAsync(async (req, res, next) => {

}))

userRouter.post('/login', wrapAsync(async (req, res, next) => {

}))

userRouter.post('/logout', wrapAsync(async (req, res, next) => {

}))

userRouter.post('/register', wrapAsync(async (req, res, next) => {

}))

userRouter.put('/:id', wrapAsync(async (req, res, next) => {

}))

userRouter.delete('/:id', wrapAsync(async (req, res, next) => {

}))

module.exports = userRouter