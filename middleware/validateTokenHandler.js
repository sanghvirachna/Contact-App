const AsyncHandler = require('express-async-handler')
const async = require('express-async-handler')
const jwt = require('jsonwebtoken')

const validateToken = AsyncHandler(
    async (req, res, next) => {
        let token ;
        let authHeader = req.headers.Authorization || req.headers.authorization
        if(authHeader && authHeader.startsWith('Bearer')){
            try{
                token = authHeader.split(' ')[1]
                const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
                req.user = decoded.user
                next()
            }catch(err){
                res.status(401).json({message:'Not authorized, token failed'})
            }
        }
        if(!token){
            res.status(401).json({message:'Not authorized, no token'})
        }
    }
)
module.exports = validateToken