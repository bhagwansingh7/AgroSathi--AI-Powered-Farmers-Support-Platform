const jwt = require('jsonwebtoken');

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        console.log('isAuthToken', token);

        if (!token) {
            return res.status(401).json({
                message: 'Authentication required'
            });
        }

        const verify = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = verify;
        next();

    } catch (error) {
        console.log(error);

        res.status(401).json({
            message: 'authentication required or error in isAuth',
            error: error.message
        });
    }
};

module.exports = { isAuth };