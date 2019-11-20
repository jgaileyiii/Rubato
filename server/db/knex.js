const environment = process.env_NODE || 'development'
const config = require('../knexfile')
const environmentConfig = config[environment]
const knex = require('knex')
const connection = knex(environmentConfig)
const COOKIE_SECRET = 'keyboard_dog'

module.exports = connection