module.exports = {

    isLoggedIn:(req,res,next)=>{
        if(req.session.user){
            next()
        }else{
            res.status(403).json({message:"Sorry, you are not authorized"})
        }

    }
}