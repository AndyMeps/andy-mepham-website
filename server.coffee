express = require 'express'
morgan = require 'morgan'

app = express()

app.use morgan 'combined'

app.use express.static __dirname + '/public'

app.listen process.env.PORT || 3000