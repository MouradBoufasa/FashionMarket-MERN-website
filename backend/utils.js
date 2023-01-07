import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET,
       {
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,},
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        })
}