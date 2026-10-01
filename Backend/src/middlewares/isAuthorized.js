const isAuthorized = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: 'User not authorized'
            });
        }

        next();
    }

}

module.exports = { isAuthorized };